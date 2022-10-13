package shared

type UtilizationMetric struct {
	Name      *MetricNameEnum      `json:"name"`
	Statistic *MetricStatisticEnum `json:"statistic"`
	Value     *float64             `json:"value"`
}
