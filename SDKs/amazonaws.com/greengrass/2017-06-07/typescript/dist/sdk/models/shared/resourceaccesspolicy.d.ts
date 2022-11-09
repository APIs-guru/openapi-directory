import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PermissionEnum } from "./permissionenum";
/**
 * A policy used by the function to access a resource.
**/
export declare class ResourceAccessPolicy extends SpeakeasyBase {
    permission?: PermissionEnum;
    resourceId: string;
}
