import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerStateEnumEnum } from "./loadbalancerstateenumenum";



// LoadBalancerState
/** 
 * Information about the state of the load balancer.
**/
export class LoadBalancerState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: LoadBalancerStateEnumEnum;

  @SpeakeasyMetadata()
  reason?: string;
}
