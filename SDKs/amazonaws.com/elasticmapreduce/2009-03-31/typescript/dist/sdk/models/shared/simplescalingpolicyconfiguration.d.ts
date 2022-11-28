import { SpeakeasyBase } from "../../../internal/utils";
import { AdjustmentTypeEnum } from "./adjustmenttypeenum";
/**
 * An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied.
**/
export declare class SimpleScalingPolicyConfiguration extends SpeakeasyBase {
    adjustmentType?: AdjustmentTypeEnum;
    coolDown?: number;
    scalingAdjustment: number;
}
