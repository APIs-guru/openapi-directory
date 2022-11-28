import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoadBalancerAddress
/** 
 * Information about a static IP address for a load balancer.
**/
export class LoadBalancerAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationId?: string;

  @SpeakeasyMetadata()
  iPv6Address?: string;

  @SpeakeasyMetadata()
  ipAddress?: string;

  @SpeakeasyMetadata()
  privateIPv4Address?: string;
}
