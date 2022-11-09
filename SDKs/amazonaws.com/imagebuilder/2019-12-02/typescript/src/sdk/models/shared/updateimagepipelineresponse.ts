import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateImagePipelineResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=imagePipelineArn" })
  imagePipelineArn?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}
