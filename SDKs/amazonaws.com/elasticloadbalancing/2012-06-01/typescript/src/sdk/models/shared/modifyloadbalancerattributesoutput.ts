import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerAttributes } from "./loadbalancerattributes";



// ModifyLoadBalancerAttributesOutput
/** 
 * Contains the output of ModifyLoadBalancerAttributes.
**/
export class ModifyLoadBalancerAttributesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  loadBalancerAttributes?: LoadBalancerAttributes;

  @SpeakeasyMetadata()
  loadBalancerName?: string;
}
