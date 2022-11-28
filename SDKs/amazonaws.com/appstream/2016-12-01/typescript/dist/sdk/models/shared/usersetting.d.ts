import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
import { PermissionEnum } from "./permissionenum";
/**
 * Describes an action and whether the action is enabled or disabled for users during their streaming sessions.
**/
export declare class UserSetting extends SpeakeasyBase {
    action: ActionEnum;
    permission: PermissionEnum;
}
