import { SpeakeasyBase } from "../../../internal/utils";
import { VpcCidrBlockState } from "./vpccidrblockstate";
/**
 * Describes an IPv6 CIDR block associated with a VPC.
**/
export declare class VpcIpv6CidrBlockAssociation extends SpeakeasyBase {
    associationId?: string;
    ipv6CidrBlock?: string;
    ipv6CidrBlockState?: VpcCidrBlockState;
    ipv6Pool?: string;
    networkBorderGroup?: string;
}
