package shared



type PutScalingPolicyInput struct {
    ComparisonOperator *ComparisonOperatorTypeEnum `json:"ComparisonOperator,omitempty"`
    EvaluationPeriods *int64 `json:"EvaluationPeriods,omitempty"`
    FleetID string `json:"FleetId"`
    MetricName MetricNameEnum `json:"MetricName"`
    Name string `json:"Name"`
    PolicyType *PolicyTypeEnum `json:"PolicyType,omitempty"`
    ScalingAdjustment *int64 `json:"ScalingAdjustment,omitempty"`
    ScalingAdjustmentType *ScalingAdjustmentTypeEnum `json:"ScalingAdjustmentType,omitempty"`
    TargetConfiguration *TargetConfiguration `json:"TargetConfiguration,omitempty"`
    Threshold *float64 `json:"Threshold,omitempty"`
    
}

