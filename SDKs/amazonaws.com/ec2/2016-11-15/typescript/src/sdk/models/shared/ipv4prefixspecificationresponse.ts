import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ipv4PrefixSpecificationResponse
/** 
 * Information about the IPv4 delegated prefixes assigned to a network interface.
**/
export class Ipv4PrefixSpecificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ipv4Prefix?: string;
}
