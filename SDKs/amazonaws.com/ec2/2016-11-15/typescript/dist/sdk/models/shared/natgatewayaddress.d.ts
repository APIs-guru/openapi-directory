import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the IP addresses and network interface associated with a NAT gateway.
**/
export declare class NatGatewayAddress extends SpeakeasyBase {
    allocationId?: string;
    networkInterfaceId?: string;
    privateIp?: string;
    publicIp?: string;
}
