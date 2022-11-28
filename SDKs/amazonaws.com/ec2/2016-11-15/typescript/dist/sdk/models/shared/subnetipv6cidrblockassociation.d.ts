import { SpeakeasyBase } from "../../../internal/utils";
import { SubnetCidrBlockState } from "./subnetcidrblockstate";
/**
 * Describes an IPv6 CIDR block associated with a subnet.
**/
export declare class SubnetIpv6CidrBlockAssociation extends SpeakeasyBase {
    associationId?: string;
    ipv6CidrBlock?: string;
    ipv6CidrBlockState?: SubnetCidrBlockState;
}
