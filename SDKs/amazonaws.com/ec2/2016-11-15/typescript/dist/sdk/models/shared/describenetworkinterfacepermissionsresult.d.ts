import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfacePermission } from "./networkinterfacepermission";
/**
 * Contains the output for DescribeNetworkInterfacePermissions.
**/
export declare class DescribeNetworkInterfacePermissionsResult extends SpeakeasyBase {
    networkInterfacePermissions?: NetworkInterfacePermission[];
    nextToken?: string;
}
