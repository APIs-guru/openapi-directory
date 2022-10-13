package shared

type FleetMetricNameAndArn struct {
	MetricArn  *string `json:"metricArn"`
	MetricName *string `json:"metricName"`
}
