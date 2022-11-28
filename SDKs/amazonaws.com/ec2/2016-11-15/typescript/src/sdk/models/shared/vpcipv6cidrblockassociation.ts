import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcCidrBlockState } from "./vpccidrblockstate";



// VpcIpv6CidrBlockAssociation
/** 
 * Describes an IPv6 CIDR block associated with a VPC.
**/
export class VpcIpv6CidrBlockAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: string;

  @SpeakeasyMetadata()
  ipv6CidrBlock?: string;

  @SpeakeasyMetadata()
  ipv6CidrBlockState?: VpcCidrBlockState;

  @SpeakeasyMetadata()
  ipv6Pool?: string;

  @SpeakeasyMetadata()
  networkBorderGroup?: string;
}
