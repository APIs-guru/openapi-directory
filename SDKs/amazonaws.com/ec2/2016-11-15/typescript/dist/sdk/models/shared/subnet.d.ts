import { SpeakeasyBase } from "../../../internal/utils";
import { SubnetIpv6CidrBlockAssociation } from "./subnetipv6cidrblockassociation";
import { SubnetStateEnum } from "./subnetstateenum";
import { Tag } from "./tag";
/**
 * Describes a subnet.
**/
export declare class Subnet extends SpeakeasyBase {
    assignIpv6AddressOnCreation?: boolean;
    availabilityZone?: string;
    availabilityZoneId?: string;
    availableIpAddressCount?: number;
    cidrBlock?: string;
    customerOwnedIpv4Pool?: string;
    defaultForAz?: boolean;
    ipv6CidrBlockAssociationSet?: SubnetIpv6CidrBlockAssociation[];
    mapCustomerOwnedIpOnLaunch?: boolean;
    mapPublicIpOnLaunch?: boolean;
    outpostArn?: string;
    ownerId?: string;
    state?: SubnetStateEnum;
    subnetArn?: string;
    subnetId?: string;
    tags?: Tag[];
    vpcId?: string;
}
