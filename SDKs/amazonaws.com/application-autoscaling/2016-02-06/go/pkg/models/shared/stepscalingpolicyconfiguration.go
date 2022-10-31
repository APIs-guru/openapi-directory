package shared



type StepScalingPolicyConfiguration struct {
    AdjustmentType *AdjustmentTypeEnum `json:"AdjustmentType,omitempty"`
    Cooldown *int64 `json:"Cooldown,omitempty"`
    MetricAggregationType *MetricAggregationTypeEnum `json:"MetricAggregationType,omitempty"`
    MinAdjustmentMagnitude *int64 `json:"MinAdjustmentMagnitude,omitempty"`
    StepAdjustments []StepAdjustment `json:"StepAdjustments,omitempty"`
    
}

