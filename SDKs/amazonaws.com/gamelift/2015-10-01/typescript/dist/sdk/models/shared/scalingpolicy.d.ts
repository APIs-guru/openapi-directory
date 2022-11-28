import { SpeakeasyBase } from "../../../internal/utils";
import { ComparisonOperatorTypeEnum } from "./comparisonoperatortypeenum";
import { MetricNameEnum } from "./metricnameenum";
import { PolicyTypeEnum } from "./policytypeenum";
import { ScalingAdjustmentTypeEnum } from "./scalingadjustmenttypeenum";
import { ScalingStatusTypeEnum } from "./scalingstatustypeenum";
import { TargetConfiguration } from "./targetconfiguration";
import { LocationUpdateStatusEnum } from "./locationupdatestatusenum";
/**
 * <p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetCapacity</a> | <a>UpdateFleetCapacity</a> | <a>DescribeEC2InstanceLimits</a> | <a>PutScalingPolicy</a> | <a>DescribeScalingPolicies</a> | <a>DeleteScalingPolicy</a> | <a>StopFleetActions</a> | <a>StartFleetActions</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
export declare class ScalingPolicy extends SpeakeasyBase {
    comparisonOperator?: ComparisonOperatorTypeEnum;
    evaluationPeriods?: number;
    fleetArn?: string;
    fleetId?: string;
    location?: string;
    metricName?: MetricNameEnum;
    name?: string;
    policyType?: PolicyTypeEnum;
    scalingAdjustment?: number;
    scalingAdjustmentType?: ScalingAdjustmentTypeEnum;
    status?: ScalingStatusTypeEnum;
    targetConfiguration?: TargetConfiguration;
    threshold?: number;
    updateStatus?: LocationUpdateStatusEnum;
}
