package shared

type StepAdjustment struct {
	MetricIntervalLowerBound *float64 `json:"MetricIntervalLowerBound"`
	MetricIntervalUpperBound *float64 `json:"MetricIntervalUpperBound"`
	ScalingAdjustment        int64    `json:"ScalingAdjustment"`
}
