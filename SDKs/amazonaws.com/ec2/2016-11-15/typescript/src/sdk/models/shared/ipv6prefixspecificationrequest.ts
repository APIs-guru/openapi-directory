import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ipv6PrefixSpecificationRequest
/** 
 * Describes the IPv4 prefix option for a network interface.
**/
export class Ipv6PrefixSpecificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ipv6Prefix?: string;
}
