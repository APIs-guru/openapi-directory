package shared

// CloudwatchMetricAction
// Describes an action that captures a CloudWatch metric.
type CloudwatchMetricAction struct {
	MetricName      string  `json:"metricName"`
	MetricNamespace string  `json:"metricNamespace"`
	MetricTimestamp *string `json:"metricTimestamp,omitempty"`
	MetricUnit      string  `json:"metricUnit"`
	MetricValue     string  `json:"metricValue"`
	RoleArn         string  `json:"roleArn"`
}
