import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfacePermissionStateCodeEnum } from "./networkinterfacepermissionstatecodeenum";
/**
 * Describes the state of a network interface permission.
**/
export declare class NetworkInterfacePermissionState extends SpeakeasyBase {
    state?: NetworkInterfacePermissionStateCodeEnum;
    statusMessage?: string;
}
