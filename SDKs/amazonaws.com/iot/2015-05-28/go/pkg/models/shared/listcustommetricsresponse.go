package shared

type ListCustomMetricsResponse struct {
	MetricNames []string `json:"metricNames"`
	NextToken   *string  `json:"nextToken"`
}
