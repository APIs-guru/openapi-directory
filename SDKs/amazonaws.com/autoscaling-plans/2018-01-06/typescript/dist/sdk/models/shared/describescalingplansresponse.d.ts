import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ScalingPlan } from "./scalingplan";
export declare class DescribeScalingPlansResponse extends SpeakeasyBase {
    nextToken?: string;
    scalingPlans?: ScalingPlan[];
}
