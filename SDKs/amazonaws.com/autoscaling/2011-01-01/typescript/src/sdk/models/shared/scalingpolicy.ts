import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Alarm } from "./alarm";
import { PredictiveScalingConfiguration } from "./predictivescalingconfiguration";
import { StepAdjustment } from "./stepadjustment";
import { TargetTrackingConfiguration } from "./targettrackingconfiguration";



// ScalingPolicy
/** 
 * Describes a scaling policy.
**/
export class ScalingPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata()
  adjustmentType?: string;

  @SpeakeasyMetadata({ elemType: Alarm })
  alarms?: Alarm[];

  @SpeakeasyMetadata()
  autoScalingGroupName?: string;

  @SpeakeasyMetadata()
  cooldown?: number;

  @SpeakeasyMetadata()
  enabled?: boolean;

  @SpeakeasyMetadata()
  estimatedInstanceWarmup?: number;

  @SpeakeasyMetadata()
  metricAggregationType?: string;

  @SpeakeasyMetadata()
  minAdjustmentMagnitude?: number;

  @SpeakeasyMetadata()
  minAdjustmentStep?: number;

  @SpeakeasyMetadata()
  policyArn?: string;

  @SpeakeasyMetadata()
  policyName?: string;

  @SpeakeasyMetadata()
  policyType?: string;

  @SpeakeasyMetadata()
  predictiveScalingConfiguration?: PredictiveScalingConfiguration;

  @SpeakeasyMetadata()
  scalingAdjustment?: number;

  @SpeakeasyMetadata({ elemType: StepAdjustment })
  stepAdjustments?: StepAdjustment[];

  @SpeakeasyMetadata()
  targetTrackingConfiguration?: TargetTrackingConfiguration;
}
