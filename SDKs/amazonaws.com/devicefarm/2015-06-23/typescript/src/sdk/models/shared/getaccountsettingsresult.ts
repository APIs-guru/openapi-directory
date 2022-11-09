import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountSettings } from "./accountsettings";


// GetAccountSettingsResult
/** 
 * Represents the account settings return values from the <code>GetAccountSettings</code> request.
**/
export class GetAccountSettingsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountSettings" })
  accountSettings?: AccountSettings;
}
