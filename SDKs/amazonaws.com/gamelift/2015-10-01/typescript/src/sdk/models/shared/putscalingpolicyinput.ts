import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorTypeEnum } from "./comparisonoperatortypeenum";
import { MetricNameEnum } from "./metricnameenum";
import { PolicyTypeEnum } from "./policytypeenum";
import { ScalingAdjustmentTypeEnum } from "./scalingadjustmenttypeenum";
import { TargetConfiguration } from "./targetconfiguration";



// PutScalingPolicyInput
/** 
 * Represents the input for a request operation.
**/
export class PutScalingPolicyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator?: ComparisonOperatorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EvaluationPeriods" })
  evaluationPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId: string;

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName: MetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType?: PolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ScalingAdjustment" })
  scalingAdjustment?: number;

  @SpeakeasyMetadata({ data: "json, name=ScalingAdjustmentType" })
  scalingAdjustmentType?: ScalingAdjustmentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetConfiguration" })
  targetConfiguration?: TargetConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Threshold" })
  threshold?: number;
}
