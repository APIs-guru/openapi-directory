import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LoadBalancerState
/** 
 * Describes the state of a Classic Load Balancer.
**/
export class LoadBalancerState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  loadBalancerName?: string;

  @SpeakeasyMetadata()
  state?: string;
}
