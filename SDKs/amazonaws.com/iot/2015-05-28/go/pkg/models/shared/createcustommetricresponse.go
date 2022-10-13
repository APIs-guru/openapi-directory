package shared

type CreateCustomMetricResponse struct {
	MetricArn  *string `json:"metricArn"`
	MetricName *string `json:"metricName"`
}
