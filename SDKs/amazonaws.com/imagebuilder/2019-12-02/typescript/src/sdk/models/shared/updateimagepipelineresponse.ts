import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateImagePipelineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=imagePipelineArn" })
  imagePipelineArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
