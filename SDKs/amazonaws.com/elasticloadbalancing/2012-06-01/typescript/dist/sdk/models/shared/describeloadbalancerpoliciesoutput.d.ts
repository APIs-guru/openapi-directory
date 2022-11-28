import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyDescription } from "./policydescription";
/**
 * Contains the output of DescribeLoadBalancerPolicies.
**/
export declare class DescribeLoadBalancerPoliciesOutput extends SpeakeasyBase {
    policyDescriptions?: PolicyDescription[];
}
