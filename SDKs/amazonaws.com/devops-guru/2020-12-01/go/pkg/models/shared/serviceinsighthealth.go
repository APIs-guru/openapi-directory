package shared

type ServiceInsightHealth struct {
	OpenProactiveInsights *int64 `json:"OpenProactiveInsights"`
	OpenReactiveInsights  *int64 `json:"OpenReactiveInsights"`
}
