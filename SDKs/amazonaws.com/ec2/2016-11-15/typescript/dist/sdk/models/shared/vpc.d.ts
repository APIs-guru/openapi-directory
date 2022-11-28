import { SpeakeasyBase } from "../../../internal/utils";
import { VpcCidrBlockAssociation } from "./vpccidrblockassociation";
import { TenancyEnum } from "./tenancyenum";
import { VpcIpv6CidrBlockAssociation } from "./vpcipv6cidrblockassociation";
import { VpcStateEnum } from "./vpcstateenum";
import { Tag } from "./tag";
/**
 * Describes a VPC.
**/
export declare class Vpc extends SpeakeasyBase {
    cidrBlock?: string;
    cidrBlockAssociationSet?: VpcCidrBlockAssociation[];
    dhcpOptionsId?: string;
    instanceTenancy?: TenancyEnum;
    ipv6CidrBlockAssociationSet?: VpcIpv6CidrBlockAssociation[];
    isDefault?: boolean;
    ownerId?: string;
    state?: VpcStateEnum;
    tags?: Tag[];
    vpcId?: string;
}
