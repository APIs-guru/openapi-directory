import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionGroupEnum } from "./permissiongroupenum";
/**
 * Describes a launch permission.
**/
export declare class LaunchPermission extends SpeakeasyBase {
    group?: PermissionGroupEnum;
    userId?: string;
}
