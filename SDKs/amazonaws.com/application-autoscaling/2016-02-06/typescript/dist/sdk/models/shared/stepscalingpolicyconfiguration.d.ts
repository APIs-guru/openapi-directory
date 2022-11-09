import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AdjustmentTypeEnum } from "./adjustmenttypeenum";
import { MetricAggregationTypeEnum } from "./metricaggregationtypeenum";
import { StepAdjustment } from "./stepadjustment";
/**
 * Represents a step scaling policy configuration to use with Application Auto Scaling.
**/
export declare class StepScalingPolicyConfiguration extends SpeakeasyBase {
    adjustmentType?: AdjustmentTypeEnum;
    cooldown?: number;
    metricAggregationType?: MetricAggregationTypeEnum;
    minAdjustmentMagnitude?: number;
    stepAdjustments?: StepAdjustment[];
}
