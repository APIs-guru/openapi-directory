package shared

// ServiceInsightHealth
// Contains the number of open proactive and reactive insights in an analyzed AWS service.
type ServiceInsightHealth struct {
	OpenProactiveInsights *int64 `json:"OpenProactiveInsights,omitempty"`
	OpenReactiveInsights  *int64 `json:"OpenReactiveInsights,omitempty"`
}
