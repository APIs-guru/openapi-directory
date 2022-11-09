import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=ComparisonOperator" })
  comparisonOperator?: ComparisonOperatorTypeEnum;

  @Metadata({ data: "json, name=EvaluationPeriods" })
  evaluationPeriods?: number;

  @Metadata({ data: "json, name=FleetArn" })
  fleetArn?: string;

  @Metadata({ data: "json, name=FleetId" })
  fleetId?: string;

  @Metadata({ data: "json, name=Location" })
  location?: string;

  @Metadata({ data: "json, name=MetricName" })
  metricName?: MetricNameEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PolicyType" })
  policyType?: PolicyTypeEnum;

  @Metadata({ data: "json, name=ScalingAdjustment" })
  scalingAdjustment?: number;

  @Metadata({ data: "json, name=ScalingAdjustmentType" })
  scalingAdjustmentType?: ScalingAdjustmentTypeEnum;

  @Metadata({ data: "json, name=Status" })
  status?: ScalingStatusTypeEnum;

  @Metadata({ data: "json, name=TargetConfiguration" })
  targetConfiguration?: TargetConfiguration;

  @Metadata({ data: "json, name=Threshold" })
  threshold?: number;

  @Metadata({ data: "json, name=UpdateStatus" })
  updateStatus?: LocationUpdateStatusEnum;
}
