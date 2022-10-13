package shared

type PutScalingPolicyInput struct {
	ComparisonOperator    *ComparisonOperatorTypeEnum `json:"ComparisonOperator"`
	EvaluationPeriods     *int64                      `json:"EvaluationPeriods"`
	FleetID               string                      `json:"FleetId"`
	MetricName            MetricNameEnum              `json:"MetricName"`
	Name                  string                      `json:"Name"`
	PolicyType            *PolicyTypeEnum             `json:"PolicyType"`
	ScalingAdjustment     *int64                      `json:"ScalingAdjustment"`
	ScalingAdjustmentType *ScalingAdjustmentTypeEnum  `json:"ScalingAdjustmentType"`
	TargetConfiguration   *TargetConfiguration        `json:"TargetConfiguration"`
	Threshold             *float64                    `json:"Threshold"`
}
