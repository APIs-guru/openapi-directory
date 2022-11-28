import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubnetIpv6CidrBlockAssociation } from "./subnetipv6cidrblockassociation";



export class AssociateSubnetCidrBlockResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ipv6CidrBlockAssociation?: SubnetIpv6CidrBlockAssociation;

  @SpeakeasyMetadata()
  subnetId?: string;
}
