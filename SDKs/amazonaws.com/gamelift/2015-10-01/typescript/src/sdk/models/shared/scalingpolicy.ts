import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorTypeEnum } from "./comparisonoperatortypeenum";
import { MetricNameEnum } from "./metricnameenum";
import { PolicyTypeEnum } from "./policytypeenum";
import { ScalingAdjustmentTypeEnum } from "./scalingadjustmenttypeenum";
import { ScalingStatusTypeEnum } from "./scalingstatustypeenum";
import { TargetConfiguration } from "./targetconfiguration";
import { LocationUpdateStatusEnum } from "./locationupdatestatusenum";



// ScalingPolicy
/** 
 * <p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetCapacity</a> | <a>UpdateFleetCapacity</a> | <a>DescribeEC2InstanceLimits</a> | <a>PutScalingPolicy</a> | <a>DescribeScalingPolicies</a> | <a>DeleteScalingPolicy</a> | <a>StopFleetActions</a> | <a>StartFleetActions</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export class ScalingPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator?: ComparisonOperatorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EvaluationPeriods" })
  evaluationPeriods?: number;

  @SpeakeasyMetadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @SpeakeasyMetadata({ data: "json, name=Location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=MetricName" })
  metricName?: MetricNameEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType?: PolicyTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ScalingAdjustment" })
  scalingAdjustment?: number;

  @SpeakeasyMetadata({ data: "json, name=ScalingAdjustmentType" })
  scalingAdjustmentType?: ScalingAdjustmentTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: ScalingStatusTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetConfiguration" })
  targetConfiguration?: TargetConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Threshold" })
  threshold?: number;

  @SpeakeasyMetadata({ data: "json, name=UpdateStatus" })
  updateStatus?: LocationUpdateStatusEnum;
}
