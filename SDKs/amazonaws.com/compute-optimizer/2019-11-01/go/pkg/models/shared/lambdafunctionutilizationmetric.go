package shared

type LambdaFunctionUtilizationMetric struct {
	Name      *LambdaFunctionMetricNameEnum      `json:"name"`
	Statistic *LambdaFunctionMetricStatisticEnum `json:"statistic"`
	Value     *float64                           `json:"value"`
}
