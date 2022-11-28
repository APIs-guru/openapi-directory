import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImagePipeline } from "./imagepipeline";



export class ListImagePipelinesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imagePipelineList", elemType: ImagePipeline })
  imagePipelineList?: ImagePipeline[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
