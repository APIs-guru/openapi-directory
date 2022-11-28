package shared

// ScalingPolicy
// <p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetCapacity</a> | <a>UpdateFleetCapacity</a> | <a>DescribeEC2InstanceLimits</a> | <a>PutScalingPolicy</a> | <a>DescribeScalingPolicies</a> | <a>DeleteScalingPolicy</a> | <a>StopFleetActions</a> | <a>StartFleetActions</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
type ScalingPolicy struct {
	ComparisonOperator    *ComparisonOperatorTypeEnum `json:"ComparisonOperator,omitempty"`
	EvaluationPeriods     *int64                      `json:"EvaluationPeriods,omitempty"`
	FleetArn              *string                     `json:"FleetArn,omitempty"`
	FleetID               *string                     `json:"FleetId,omitempty"`
	Location              *string                     `json:"Location,omitempty"`
	MetricName            *MetricNameEnum             `json:"MetricName,omitempty"`
	Name                  *string                     `json:"Name,omitempty"`
	PolicyType            *PolicyTypeEnum             `json:"PolicyType,omitempty"`
	ScalingAdjustment     *int64                      `json:"ScalingAdjustment,omitempty"`
	ScalingAdjustmentType *ScalingAdjustmentTypeEnum  `json:"ScalingAdjustmentType,omitempty"`
	Status                *ScalingStatusTypeEnum      `json:"Status,omitempty"`
	TargetConfiguration   *TargetConfiguration        `json:"TargetConfiguration,omitempty"`
	Threshold             *float64                    `json:"Threshold,omitempty"`
	UpdateStatus          *LocationUpdateStatusEnum   `json:"UpdateStatus,omitempty"`
}
