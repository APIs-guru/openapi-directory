import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CidrBlock } from "./cidrblock";
import { Ipv6CidrBlock } from "./ipv6cidrblock";
import { VpcPeeringConnectionOptionsDescription } from "./vpcpeeringconnectionoptionsdescription";



// VpcPeeringConnectionVpcInfo
/** 
 * Describes a VPC in a VPC peering connection.
**/
export class VpcPeeringConnectionVpcInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrBlock?: string;

  @SpeakeasyMetadata({ elemType: CidrBlock })
  cidrBlockSet?: CidrBlock[];

  @SpeakeasyMetadata({ elemType: Ipv6CidrBlock })
  ipv6CidrBlockSet?: Ipv6CidrBlock[];

  @SpeakeasyMetadata()
  ownerId?: string;

  @SpeakeasyMetadata()
  peeringOptions?: VpcPeeringConnectionOptionsDescription;

  @SpeakeasyMetadata()
  region?: string;

  @SpeakeasyMetadata()
  vpcId?: string;
}
