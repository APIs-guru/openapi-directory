import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DetachLoadBalancerFromSubnetsOutput
/** 
 * Contains the output of DetachLoadBalancerFromSubnets.
**/
export class DetachLoadBalancerFromSubnetsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  subnets?: string[];
}
