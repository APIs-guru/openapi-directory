import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountSettings } from "./accountsettings";



// GetAccountSettingsResult
/** 
 * Represents the account settings return values from the <code>GetAccountSettings</code> request.
**/
export class GetAccountSettingsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountSettings" })
  accountSettings?: AccountSettings;
}
