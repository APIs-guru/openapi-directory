import { SpeakeasyBase } from "../../../internal/utils";
import { Ipv4PrefixSpecificationResponse } from "./ipv4prefixspecificationresponse";
import { InstanceIpv6Address } from "./instanceipv6address";
import { Ipv6PrefixSpecificationResponse } from "./ipv6prefixspecificationresponse";
import { PrivateIpAddressSpecification } from "./privateipaddressspecification";
/**
 * Describes a network interface.
**/
export declare class LaunchTemplateInstanceNetworkInterfaceSpecification extends SpeakeasyBase {
    associateCarrierIpAddress?: boolean;
    associatePublicIpAddress?: boolean;
    deleteOnTermination?: boolean;
    description?: string;
    deviceIndex?: number;
    groups?: string[];
    interfaceType?: string;
    ipv4PrefixCount?: number;
    ipv4Prefixes?: Ipv4PrefixSpecificationResponse[];
    ipv6AddressCount?: number;
    ipv6Addresses?: InstanceIpv6Address[];
    ipv6PrefixCount?: number;
    ipv6Prefixes?: Ipv6PrefixSpecificationResponse[];
    networkCardIndex?: number;
    networkInterfaceId?: string;
    privateIpAddress?: string;
    privateIpAddresses?: PrivateIpAddressSpecification[];
    secondaryPrivateIpAddressCount?: number;
    subnetId?: string;
}
