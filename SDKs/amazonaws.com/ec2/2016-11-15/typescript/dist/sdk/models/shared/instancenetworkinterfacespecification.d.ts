import { SpeakeasyBase } from "../../../internal/utils";
import { Ipv4PrefixSpecificationRequest } from "./ipv4prefixspecificationrequest";
import { InstanceIpv6Address } from "./instanceipv6address";
import { Ipv6PrefixSpecificationRequest } from "./ipv6prefixspecificationrequest";
import { PrivateIpAddressSpecification } from "./privateipaddressspecification";
/**
 * Describes a network interface.
**/
export declare class InstanceNetworkInterfaceSpecification extends SpeakeasyBase {
    associateCarrierIpAddress?: boolean;
    associatePublicIpAddress?: boolean;
    deleteOnTermination?: boolean;
    description?: string;
    deviceIndex?: number;
    groups?: string[];
    interfaceType?: string;
    ipv4PrefixCount?: number;
    ipv4Prefixes?: Ipv4PrefixSpecificationRequest[];
    ipv6AddressCount?: number;
    ipv6Addresses?: InstanceIpv6Address[];
    ipv6PrefixCount?: number;
    ipv6Prefixes?: Ipv6PrefixSpecificationRequest[];
    networkCardIndex?: number;
    networkInterfaceId?: string;
    privateIpAddress?: string;
    privateIpAddresses?: PrivateIpAddressSpecification[];
    secondaryPrivateIpAddressCount?: number;
    subnetId?: string;
}
