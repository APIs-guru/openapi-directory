package shared

type CloudwatchMetricAction struct {
	MetricName      string  `json:"metricName"`
	MetricNamespace string  `json:"metricNamespace"`
	MetricTimestamp *string `json:"metricTimestamp"`
	MetricUnit      string  `json:"metricUnit"`
	MetricValue     string  `json:"metricValue"`
	RoleArn         string  `json:"roleArn"`
}
