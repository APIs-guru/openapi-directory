import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AnalysisLoadBalancerListener
/** 
 * Describes a load balancer listener.
**/
export class AnalysisLoadBalancerListener extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instancePort?: number;

  @SpeakeasyMetadata()
  loadBalancerPort?: number;
}
