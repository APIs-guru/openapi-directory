package shared

// EbsUtilizationMetric
// <p>Describes a utilization metric of an Amazon Elastic Block Store (Amazon EBS) volume.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>
type EbsUtilizationMetric struct {
	Name      *EbsMetricNameEnum   `json:"name,omitempty"`
	Statistic *MetricStatisticEnum `json:"statistic,omitempty"`
	Value     *float64             `json:"value,omitempty"`
}
