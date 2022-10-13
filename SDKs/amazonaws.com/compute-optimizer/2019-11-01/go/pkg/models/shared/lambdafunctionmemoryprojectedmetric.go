package shared

type LambdaFunctionMemoryProjectedMetric struct {
	Name      *LambdaFunctionMemoryMetricNameEnum      `json:"name"`
	Statistic *LambdaFunctionMemoryMetricStatisticEnum `json:"statistic"`
	Value     *float64                                 `json:"value"`
}
