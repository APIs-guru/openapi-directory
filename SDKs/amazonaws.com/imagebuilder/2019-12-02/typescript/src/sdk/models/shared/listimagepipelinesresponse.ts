import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImagePipeline } from "./imagepipeline";


export class ListImagePipelinesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imagePipelineList", elemType: shared.ImagePipeline })
  imagePipelineList?: ImagePipeline[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
