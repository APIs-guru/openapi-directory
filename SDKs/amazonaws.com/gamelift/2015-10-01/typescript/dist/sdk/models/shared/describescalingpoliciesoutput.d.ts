import { SpeakeasyBase } from "../../../internal/utils";
import { ScalingPolicy } from "./scalingpolicy";
/**
 * Represents the returned data in response to a request operation.
**/
export declare class DescribeScalingPoliciesOutput extends SpeakeasyBase {
    nextToken?: string;
    scalingPolicies?: ScalingPolicy[];
}
