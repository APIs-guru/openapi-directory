package shared

type UtilizationMetric struct {
	Name      *MetricNameEnum      `json:"name,omitempty"`
	Statistic *MetricStatisticEnum `json:"statistic,omitempty"`
	Value     *float64             `json:"value,omitempty"`
}
