import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyDescription } from "./policydescription";



// DescribeLoadBalancerPoliciesOutput
/** 
 * Contains the output of DescribeLoadBalancerPolicies.
**/
export class DescribeLoadBalancerPoliciesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PolicyDescription })
  policyDescriptions?: PolicyDescription[];
}
