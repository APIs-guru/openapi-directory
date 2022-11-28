import { SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";
import { PredictiveScalingConfiguration } from "./predictivescalingconfiguration";
import { StepAdjustment } from "./stepadjustment";
import { TargetTrackingConfiguration } from "./targettrackingconfiguration";
/**
 * Describes a scaling policy.
**/
export declare class ScalingPolicy extends SpeakeasyBase {
    adjustmentType?: string;
    alarms?: Alarm[];
    autoScalingGroupName?: string;
    cooldown?: number;
    enabled?: boolean;
    estimatedInstanceWarmup?: number;
    metricAggregationType?: string;
    minAdjustmentMagnitude?: number;
    minAdjustmentStep?: number;
    policyArn?: string;
    policyName?: string;
    policyType?: string;
    predictiveScalingConfiguration?: PredictiveScalingConfiguration;
    scalingAdjustment?: number;
    stepAdjustments?: StepAdjustment[];
    targetTrackingConfiguration?: TargetTrackingConfiguration;
}
