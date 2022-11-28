import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MfaOptionType } from "./mfaoptiontype";



// SetUserSettingsRequest
/** 
 * Represents the request to set user settings.
**/
export class SetUserSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccessToken" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=MFAOptions", elemType: MfaOptionType })
  mfaOptions: MfaOptionType[];
}
