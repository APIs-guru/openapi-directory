import { SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorTypeEnum } from "./comparisonoperatortypeenum";
import { MetricNameEnum } from "./metricnameenum";
import { PolicyTypeEnum } from "./policytypeenum";
import { ScalingAdjustmentTypeEnum } from "./scalingadjustmenttypeenum";
import { TargetConfiguration } from "./targetconfiguration";
/**
 * Represents the input for a request operation.
**/
export declare class PutScalingPolicyInput extends SpeakeasyBase {
    comparisonOperator?: ComparisonOperatorTypeEnum;
    evaluationPeriods?: number;
    fleetId: string;
    metricName: MetricNameEnum;
    name: string;
    policyType?: PolicyTypeEnum;
    scalingAdjustment?: number;
    scalingAdjustmentType?: ScalingAdjustmentTypeEnum;
    targetConfiguration?: TargetConfiguration;
    threshold?: number;
}
