import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcCidrBlockState } from "./vpccidrblockstate";



// VpcCidrBlockAssociation
/** 
 * Describes an IPv4 CIDR block associated with a VPC.
**/
export class VpcCidrBlockAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationId?: string;

  @SpeakeasyMetadata()
  cidrBlock?: string;

  @SpeakeasyMetadata()
  cidrBlockState?: VpcCidrBlockState;
}
