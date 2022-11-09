import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImagePipeline } from "./imagepipeline";


export class GetImagePipelineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imagePipeline" })
  imagePipeline?: ImagePipeline;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
