import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerAddress } from "./loadbalanceraddress";



// AvailabilityZone
/** 
 * Information about an Availability Zone.
**/
export class AvailabilityZone extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: LoadBalancerAddress })
  loadBalancerAddresses?: LoadBalancerAddress[];

  @SpeakeasyMetadata()
  outpostId?: string;

  @SpeakeasyMetadata()
  subnetId?: string;

  @SpeakeasyMetadata()
  zoneName?: string;
}
