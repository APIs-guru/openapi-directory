package shared

// FleetMetricNameAndArn
// The name and ARN of a fleet metric.
type FleetMetricNameAndArn struct {
	MetricArn  *string `json:"metricArn,omitempty"`
	MetricName *string `json:"metricName,omitempty"`
}
