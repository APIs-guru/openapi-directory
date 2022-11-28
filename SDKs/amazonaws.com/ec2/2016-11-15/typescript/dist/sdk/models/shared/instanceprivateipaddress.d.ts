import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceNetworkInterfaceAssociation } from "./instancenetworkinterfaceassociation";
/**
 * Describes a private IPv4 address.
**/
export declare class InstancePrivateIpAddress extends SpeakeasyBase {
    association?: InstanceNetworkInterfaceAssociation;
    primary?: boolean;
    privateDnsName?: string;
    privateIpAddress?: string;
}
