import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
import { PermissionEnum } from "./permissionenum";



// UserSetting
/** 
 * Describes an action and whether the action is enabled or disabled for users during their streaming sessions.
**/
export class UserSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action: ActionEnum;

  @SpeakeasyMetadata({ data: "json, name=Permission" })
  permission: PermissionEnum;
}
