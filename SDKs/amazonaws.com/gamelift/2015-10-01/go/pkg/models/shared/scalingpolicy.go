package shared



type ScalingPolicy struct {
    ComparisonOperator *ComparisonOperatorTypeEnum `json:"ComparisonOperator,omitempty"`
    EvaluationPeriods *int64 `json:"EvaluationPeriods,omitempty"`
    FleetArn *string `json:"FleetArn,omitempty"`
    FleetID *string `json:"FleetId,omitempty"`
    Location *string `json:"Location,omitempty"`
    MetricName *MetricNameEnum `json:"MetricName,omitempty"`
    Name *string `json:"Name,omitempty"`
    PolicyType *PolicyTypeEnum `json:"PolicyType,omitempty"`
    ScalingAdjustment *int64 `json:"ScalingAdjustment,omitempty"`
    ScalingAdjustmentType *ScalingAdjustmentTypeEnum `json:"ScalingAdjustmentType,omitempty"`
    Status *ScalingStatusTypeEnum `json:"Status,omitempty"`
    TargetConfiguration *TargetConfiguration `json:"TargetConfiguration,omitempty"`
    Threshold *float64 `json:"Threshold,omitempty"`
    UpdateStatus *LocationUpdateStatusEnum `json:"UpdateStatus,omitempty"`
    
}

