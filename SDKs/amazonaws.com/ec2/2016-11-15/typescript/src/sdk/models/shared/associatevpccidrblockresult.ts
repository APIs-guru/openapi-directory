import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcCidrBlockAssociation } from "./vpccidrblockassociation";
import { VpcIpv6CidrBlockAssociation } from "./vpcipv6cidrblockassociation";



export class AssociateVpcCidrBlockResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrBlockAssociation?: VpcCidrBlockAssociation;

  @SpeakeasyMetadata()
  ipv6CidrBlockAssociation?: VpcIpv6CidrBlockAssociation;

  @SpeakeasyMetadata()
  vpcId?: string;
}
