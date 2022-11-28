package shared

// LambdaFunctionMemoryProjectedMetric
// Describes a projected utilization metric of an Lambda function recommendation option.
type LambdaFunctionMemoryProjectedMetric struct {
	Name      *LambdaFunctionMemoryMetricNameEnum      `json:"name,omitempty"`
	Statistic *LambdaFunctionMemoryMetricStatisticEnum `json:"statistic,omitempty"`
	Value     *float64                                 `json:"value,omitempty"`
}
