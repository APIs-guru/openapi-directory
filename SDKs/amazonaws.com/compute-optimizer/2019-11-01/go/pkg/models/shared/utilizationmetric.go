package shared

// UtilizationMetric
// <p>Describes a utilization metric of a resource, such as an Amazon EC2 instance.</p> <p>Compare the utilization metric data of your resource against its projected utilization metric data to determine the performance difference between your current resource and the recommended option.</p>
type UtilizationMetric struct {
	Name      *MetricNameEnum      `json:"name,omitempty"`
	Statistic *MetricStatisticEnum `json:"statistic,omitempty"`
	Value     *float64             `json:"value,omitempty"`
}
