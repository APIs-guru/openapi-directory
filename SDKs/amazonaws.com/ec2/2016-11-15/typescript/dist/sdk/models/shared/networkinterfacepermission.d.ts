import { SpeakeasyBase } from "../../../internal/utils";
import { InterfacePermissionTypeEnum } from "./interfacepermissiontypeenum";
import { NetworkInterfacePermissionState } from "./networkinterfacepermissionstate";
/**
 * Describes a permission for a network interface.
**/
export declare class NetworkInterfacePermission extends SpeakeasyBase {
    awsAccountId?: string;
    awsService?: string;
    networkInterfaceId?: string;
    networkInterfacePermissionId?: string;
    permission?: InterfacePermissionTypeEnum;
    permissionState?: NetworkInterfacePermissionState;
}
