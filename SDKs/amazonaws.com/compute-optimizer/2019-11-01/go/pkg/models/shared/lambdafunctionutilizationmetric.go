package shared

type LambdaFunctionUtilizationMetric struct {
	Name      *LambdaFunctionMetricNameEnum      `json:"name,omitempty"`
	Statistic *LambdaFunctionMetricStatisticEnum `json:"statistic,omitempty"`
	Value     *float64                           `json:"value,omitempty"`
}
