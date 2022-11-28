import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteImagePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imagePipelineArn" })
  imagePipelineArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
