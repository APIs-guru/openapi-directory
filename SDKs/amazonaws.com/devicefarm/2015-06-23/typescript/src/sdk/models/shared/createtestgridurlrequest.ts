import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTestGridUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expiresInSeconds" })
  expiresInSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=projectArn" })
  projectArn: string;
}
