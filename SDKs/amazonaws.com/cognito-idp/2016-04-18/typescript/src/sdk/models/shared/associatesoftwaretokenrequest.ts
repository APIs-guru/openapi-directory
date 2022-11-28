import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateSoftwareTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Session" })
  session?: string;
}
