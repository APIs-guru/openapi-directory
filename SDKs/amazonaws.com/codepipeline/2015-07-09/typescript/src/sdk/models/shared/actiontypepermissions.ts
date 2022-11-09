import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionTypePermissions
/** 
 * Details identifying the users with permissions to use the action type.
**/
export class ActionTypePermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedAccounts" })
  allowedAccounts: string[];
}
