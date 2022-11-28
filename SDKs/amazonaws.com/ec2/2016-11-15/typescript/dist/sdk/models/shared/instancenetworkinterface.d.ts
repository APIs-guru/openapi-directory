import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceNetworkInterfaceAssociation } from "./instancenetworkinterfaceassociation";
import { InstanceNetworkInterfaceAttachment } from "./instancenetworkinterfaceattachment";
import { GroupIdentifier } from "./groupidentifier";
import { InstanceIpv4Prefix } from "./instanceipv4prefix";
import { InstanceIpv6Address } from "./instanceipv6address";
import { InstanceIpv6Prefix } from "./instanceipv6prefix";
import { InstancePrivateIpAddress } from "./instanceprivateipaddress";
import { NetworkInterfaceStatusEnum } from "./networkinterfacestatusenum";
/**
 * Describes a network interface.
**/
export declare class InstanceNetworkInterface extends SpeakeasyBase {
    association?: InstanceNetworkInterfaceAssociation;
    attachment?: InstanceNetworkInterfaceAttachment;
    description?: string;
    groups?: GroupIdentifier[];
    interfaceType?: string;
    ipv4Prefixes?: InstanceIpv4Prefix[];
    ipv6Addresses?: InstanceIpv6Address[];
    ipv6Prefixes?: InstanceIpv6Prefix[];
    macAddress?: string;
    networkInterfaceId?: string;
    ownerId?: string;
    privateDnsName?: string;
    privateIpAddress?: string;
    privateIpAddresses?: InstancePrivateIpAddress[];
    sourceDestCheck?: boolean;
    status?: NetworkInterfaceStatusEnum;
    subnetId?: string;
    vpcId?: string;
}
