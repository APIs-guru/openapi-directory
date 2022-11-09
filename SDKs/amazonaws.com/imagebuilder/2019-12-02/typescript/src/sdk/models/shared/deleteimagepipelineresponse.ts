import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteImagePipelineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imagePipelineArn" })
  imagePipelineArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
