import { SpeakeasyBase } from "../../../internal/utils";
import { PermissionGroupEnum } from "./permissiongroupenum";
/**
 * Describes the user or group to be added or removed from the list of create volume permissions for a volume.
**/
export declare class CreateVolumePermission extends SpeakeasyBase {
    group?: PermissionGroupEnum;
    userId?: string;
}
