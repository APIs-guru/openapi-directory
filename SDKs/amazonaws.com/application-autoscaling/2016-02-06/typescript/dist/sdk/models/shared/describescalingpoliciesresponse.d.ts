import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalingPolicy } from "./scalingpolicy";
export declare class DescribeScalingPoliciesResponse extends SpeakeasyBase {
    nextToken?: string;
    scalingPolicies?: ScalingPolicy[];
}
