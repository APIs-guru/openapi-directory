package shared

type ScalingPolicy struct {
	ComparisonOperator    *ComparisonOperatorTypeEnum `json:"ComparisonOperator"`
	EvaluationPeriods     *int64                      `json:"EvaluationPeriods"`
	FleetArn              *string                     `json:"FleetArn"`
	FleetID               *string                     `json:"FleetId"`
	Location              *string                     `json:"Location"`
	MetricName            *MetricNameEnum             `json:"MetricName"`
	Name                  *string                     `json:"Name"`
	PolicyType            *PolicyTypeEnum             `json:"PolicyType"`
	ScalingAdjustment     *int64                      `json:"ScalingAdjustment"`
	ScalingAdjustmentType *ScalingAdjustmentTypeEnum  `json:"ScalingAdjustmentType"`
	Status                *ScalingStatusTypeEnum      `json:"Status"`
	TargetConfiguration   *TargetConfiguration        `json:"TargetConfiguration"`
	Threshold             *float64                    `json:"Threshold"`
	UpdateStatus          *LocationUpdateStatusEnum   `json:"UpdateStatus"`
}
