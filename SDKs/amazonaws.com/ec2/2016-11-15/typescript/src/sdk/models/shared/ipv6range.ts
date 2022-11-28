import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ipv6Range
/** 
 * [EC2-VPC only] Describes an IPv6 range.
**/
export class Ipv6Range extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrIpv6?: string;

  @SpeakeasyMetadata()
  description?: string;
}
