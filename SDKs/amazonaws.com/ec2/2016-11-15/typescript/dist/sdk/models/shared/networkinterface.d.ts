import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkInterfaceAssociation } from "./networkinterfaceassociation";
import { NetworkInterfaceAttachment } from "./networkinterfaceattachment";
import { GroupIdentifier } from "./groupidentifier";
import { NetworkInterfaceTypeEnum } from "./networkinterfacetypeenum";
import { Ipv4PrefixSpecification } from "./ipv4prefixspecification";
import { NetworkInterfaceIpv6Address } from "./networkinterfaceipv6address";
import { Ipv6PrefixSpecification } from "./ipv6prefixspecification";
import { NetworkInterfacePrivateIpAddress } from "./networkinterfaceprivateipaddress";
import { NetworkInterfaceStatusEnum } from "./networkinterfacestatusenum";
import { Tag } from "./tag";
/**
 * Describes a network interface.
**/
export declare class NetworkInterface extends SpeakeasyBase {
    association?: NetworkInterfaceAssociation;
    attachment?: NetworkInterfaceAttachment;
    availabilityZone?: string;
    description?: string;
    groups?: GroupIdentifier[];
    interfaceType?: NetworkInterfaceTypeEnum;
    ipv4Prefixes?: Ipv4PrefixSpecification[];
    ipv6Addresses?: NetworkInterfaceIpv6Address[];
    ipv6Prefixes?: Ipv6PrefixSpecification[];
    macAddress?: string;
    networkInterfaceId?: string;
    outpostArn?: string;
    ownerId?: string;
    privateDnsName?: string;
    privateIpAddress?: string;
    privateIpAddresses?: NetworkInterfacePrivateIpAddress[];
    requesterId?: string;
    requesterManaged?: boolean;
    sourceDestCheck?: boolean;
    status?: NetworkInterfaceStatusEnum;
    subnetId?: string;
    tagSet?: Tag[];
    vpcId?: string;
}
