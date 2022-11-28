import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeDescription } from "./policytypedescription";



// DescribeLoadBalancerPolicyTypesOutput
/** 
 * Contains the output of DescribeLoadBalancerPolicyTypes.
**/
export class DescribeLoadBalancerPolicyTypesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PolicyTypeDescription })
  policyTypeDescriptions?: PolicyTypeDescription[];
}
