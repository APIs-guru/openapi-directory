package shared

type CreateCustomMetricResponse struct {
	MetricArn  *string `json:"metricArn,omitempty"`
	MetricName *string `json:"metricName,omitempty"`
}
