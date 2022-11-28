import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttachLoadBalancerToSubnetsOutput
/** 
 * Contains the output of AttachLoadBalancerToSubnets.
**/
export class AttachLoadBalancerToSubnetsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  subnets?: string[];
}
