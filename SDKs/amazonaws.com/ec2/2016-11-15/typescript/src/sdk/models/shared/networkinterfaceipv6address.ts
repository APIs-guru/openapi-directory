import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NetworkInterfaceIpv6Address
/** 
 * Describes an IPv6 address associated with a network interface.
**/
export class NetworkInterfaceIpv6Address extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ipv6Address?: string;
}
