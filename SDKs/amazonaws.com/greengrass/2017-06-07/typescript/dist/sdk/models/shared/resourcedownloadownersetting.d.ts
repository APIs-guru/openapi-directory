import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionEnum } from "./permissionenum";
/**
 * The owner setting for downloaded machine learning resources.
**/
export declare class ResourceDownloadOwnerSetting extends SpeakeasyBase {
    groupOwner: string;
    groupPermission: PermissionEnum;
}
