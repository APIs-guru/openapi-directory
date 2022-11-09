import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator?: ComparisonOperatorTypeEnum;

  @Metadata({ data: "json, name=EvaluationPeriods" })
  evaluationPeriods?: number;

  @Metadata({ data: "json, name=FleetId" })
  fleetId: string;

  @Metadata({ data: "json, name=MetricName" })
  metricName: MetricNameEnum;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=PolicyType" })
  policyType?: PolicyTypeEnum;

  @Metadata({ data: "json, name=ScalingAdjustment" })
  scalingAdjustment?: number;

  @Metadata({ data: "json, name=ScalingAdjustmentType" })
  scalingAdjustmentType?: ScalingAdjustmentTypeEnum;

  @Metadata({ data: "json, name=TargetConfiguration" })
  targetConfiguration?: TargetConfiguration;

  @Metadata({ data: "json, name=Threshold" })
  threshold?: number;
}
