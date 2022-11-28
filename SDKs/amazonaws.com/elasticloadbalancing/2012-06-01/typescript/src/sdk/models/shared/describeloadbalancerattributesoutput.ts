import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoadBalancerAttributes } from "./loadbalancerattributes";



// DescribeLoadBalancerAttributesOutput
/** 
 * Contains the output of DescribeLoadBalancerAttributes.
**/
export class DescribeLoadBalancerAttributesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  loadBalancerAttributes?: LoadBalancerAttributes;
}
