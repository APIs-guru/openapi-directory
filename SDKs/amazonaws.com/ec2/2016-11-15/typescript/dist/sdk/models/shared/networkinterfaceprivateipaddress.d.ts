import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfaceAssociation } from "./networkinterfaceassociation";
/**
 * Describes the private IPv4 address of a network interface.
**/
export declare class NetworkInterfacePrivateIpAddress extends SpeakeasyBase {
    association?: NetworkInterfaceAssociation;
    primary?: boolean;
    privateDnsName?: string;
    privateIpAddress?: string;
}
