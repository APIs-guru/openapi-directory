import { SpeakeasyBase } from "../../../internal/utils";
import { VpcCidrBlockState } from "./vpccidrblockstate";
/**
 * Describes an IPv4 CIDR block associated with a VPC.
**/
export declare class VpcCidrBlockAssociation extends SpeakeasyBase {
    associationId?: string;
    cidrBlock?: string;
    cidrBlockState?: VpcCidrBlockState;
}
