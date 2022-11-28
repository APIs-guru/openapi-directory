package shared

// LambdaFunctionUtilizationMetric
// Describes a utilization metric of an Lambda function.
type LambdaFunctionUtilizationMetric struct {
	Name      *LambdaFunctionMetricNameEnum      `json:"name,omitempty"`
	Statistic *LambdaFunctionMetricStatisticEnum `json:"statistic,omitempty"`
	Value     *float64                           `json:"value,omitempty"`
}
