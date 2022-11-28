import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplySecurityGroupsToLoadBalancerOutput
/** 
 * Contains the output of ApplySecurityGroupsToLoadBalancer.
**/
export class ApplySecurityGroupsToLoadBalancerOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  securityGroups?: string[];
}
