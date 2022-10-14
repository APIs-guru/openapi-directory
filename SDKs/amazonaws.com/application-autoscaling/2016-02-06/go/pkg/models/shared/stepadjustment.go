package shared

type StepAdjustment struct {
	MetricIntervalLowerBound *float64 `json:"MetricIntervalLowerBound,omitempty"`
	MetricIntervalUpperBound *float64 `json:"MetricIntervalUpperBound,omitempty"`
	ScalingAdjustment        int64    `json:"ScalingAdjustment"`
}
