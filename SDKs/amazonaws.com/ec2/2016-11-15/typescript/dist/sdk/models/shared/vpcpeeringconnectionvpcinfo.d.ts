import { SpeakeasyBase } from "../../../internal/utils";
import { CidrBlock } from "./cidrblock";
import { Ipv6CidrBlock } from "./ipv6cidrblock";
import { VpcPeeringConnectionOptionsDescription } from "./vpcpeeringconnectionoptionsdescription";
/**
 * Describes a VPC in a VPC peering connection.
**/
export declare class VpcPeeringConnectionVpcInfo extends SpeakeasyBase {
    cidrBlock?: string;
    cidrBlockSet?: CidrBlock[];
    ipv6CidrBlockSet?: Ipv6CidrBlock[];
    ownerId?: string;
    peeringOptions?: VpcPeeringConnectionOptionsDescription;
    region?: string;
    vpcId?: string;
}
