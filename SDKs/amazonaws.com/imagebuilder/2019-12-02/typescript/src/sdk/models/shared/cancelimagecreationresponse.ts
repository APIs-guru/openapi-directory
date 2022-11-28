import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelImageCreationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=imageBuildVersionArn" })
  imageBuildVersionArn?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
