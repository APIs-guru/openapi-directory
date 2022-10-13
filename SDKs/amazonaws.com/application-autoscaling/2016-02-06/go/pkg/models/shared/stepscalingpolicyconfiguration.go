package shared

type StepScalingPolicyConfiguration struct {
	AdjustmentType         *AdjustmentTypeEnum        `json:"AdjustmentType"`
	Cooldown               *int64                     `json:"Cooldown"`
	MetricAggregationType  *MetricAggregationTypeEnum `json:"MetricAggregationType"`
	MinAdjustmentMagnitude *int64                     `json:"MinAdjustmentMagnitude"`
	StepAdjustments        []StepAdjustment           `json:"StepAdjustments"`
}
