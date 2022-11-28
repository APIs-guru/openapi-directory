import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImagePipeline } from "./imagepipeline";



export class GetImagePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imagePipeline" })
  imagePipeline?: ImagePipeline;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
