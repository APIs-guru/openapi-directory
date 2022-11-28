import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ipv4PrefixSpecificationRequest
/** 
 * Describes the IPv4 prefix option for a network interface.
**/
export class Ipv4PrefixSpecificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ipv4Prefix?: string;
}
