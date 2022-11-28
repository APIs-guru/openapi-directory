import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetCidrBlockState } from "./subnetcidrblockstate";



// SubnetIpv6CidrBlockAssociation
/** 
 * Describes an IPv6 CIDR block associated with a subnet.
**/
export class SubnetIpv6CidrBlockAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: string;

  @SpeakeasyMetadata()
  ipv6CidrBlock?: string;

  @SpeakeasyMetadata()
  ipv6CidrBlockState?: SubnetCidrBlockState;
}
