import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdjustmentTypeEnum } from "./adjustmenttypeenum";
import { MetricAggregationTypeEnum } from "./metricaggregationtypeenum";
import { StepAdjustment } from "./stepadjustment";


// StepScalingPolicyConfiguration
/** 
 * Represents a step scaling policy configuration to use with Application Auto Scaling.
**/
export class StepScalingPolicyConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdjustmentType" })
  adjustmentType?: AdjustmentTypeEnum;

  @Metadata({ data: "json, name=Cooldown" })
  cooldown?: number;

  @Metadata({ data: "json, name=MetricAggregationType" })
  metricAggregationType?: MetricAggregationTypeEnum;

  @Metadata({ data: "json, name=MinAdjustmentMagnitude" })
  minAdjustmentMagnitude?: number;

  @Metadata({ data: "json, name=StepAdjustments", elemType: shared.StepAdjustment })
  stepAdjustments?: StepAdjustment[];
}
