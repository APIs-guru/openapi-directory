import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionTypePermissions
/** 
 * Details identifying the users with permissions to use the action type.
**/
export class ActionTypePermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedAccounts" })
  allowedAccounts: string[];
}
