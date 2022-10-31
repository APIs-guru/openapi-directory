package shared

type DescribeAccountHealthResponse struct {
	MetricsAnalyzed       int64 `json:"MetricsAnalyzed"`
	OpenProactiveInsights int64 `json:"OpenProactiveInsights"`
	OpenReactiveInsights  int64 `json:"OpenReactiveInsights"`
	ResourceHours         int64 `json:"ResourceHours"`
}
