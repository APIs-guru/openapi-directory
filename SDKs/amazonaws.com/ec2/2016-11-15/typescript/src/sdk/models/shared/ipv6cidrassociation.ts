import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ipv6CidrAssociation
/** 
 * Describes an IPv6 CIDR block association.
**/
export class Ipv6CidrAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associatedResource?: string;

  @SpeakeasyMetadata()
  ipv6Cidr?: string;
}
