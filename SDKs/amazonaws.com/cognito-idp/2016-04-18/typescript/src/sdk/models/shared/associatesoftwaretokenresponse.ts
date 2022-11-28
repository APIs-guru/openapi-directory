import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateSoftwareTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SecretCode" })
  secretCode?: string;

  @SpeakeasyMetadata({ data: "json, name=Session" })
  session?: string;
}
