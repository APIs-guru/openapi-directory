import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionEnum } from "./actionenum";
import { PermissionEnum } from "./permissionenum";


// UserSetting
/** 
 * Describes an action and whether the action is enabled or disabled for users during their streaming sessions.
**/
export class UserSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action: ActionEnum;

  @Metadata({ data: "json, name=Permission" })
  permission: PermissionEnum;
}
