import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdjustmentTypeEnum } from "./adjustmenttypeenum";
import { MetricAggregationTypeEnum } from "./metricaggregationtypeenum";
import { StepAdjustment } from "./stepadjustment";



// StepScalingPolicyConfiguration
/** 
 * Represents a step scaling policy configuration to use with Application Auto Scaling.
**/
export class StepScalingPolicyConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdjustmentType" })
  adjustmentType?: AdjustmentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Cooldown" })
  cooldown?: number;

  @SpeakeasyMetadata({ data: "json, name=MetricAggregationType" })
  metricAggregationType?: MetricAggregationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=MinAdjustmentMagnitude" })
  minAdjustmentMagnitude?: number;

  @SpeakeasyMetadata({ data: "json, name=StepAdjustments", elemType: StepAdjustment })
  stepAdjustments?: StepAdjustment[];
}
