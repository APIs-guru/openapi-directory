import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTypeDescription } from "./policytypedescription";
/**
 * Contains the output of DescribeLoadBalancerPolicyTypes.
**/
export declare class DescribeLoadBalancerPolicyTypesOutput extends SpeakeasyBase {
    policyTypeDescriptions?: PolicyTypeDescription[];
}
