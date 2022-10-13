package shared

type EbsUtilizationMetric struct {
	Name      *EbsMetricNameEnum   `json:"name"`
	Statistic *MetricStatisticEnum `json:"statistic"`
	Value     *float64             `json:"value"`
}
