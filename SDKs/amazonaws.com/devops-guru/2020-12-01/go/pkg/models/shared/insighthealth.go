package shared

// InsightHealth
//
//	Information about the number of open reactive and proactive insights that can be used to gauge the health of your system.
type InsightHealth struct {
	MeanTimeToRecoverInMilliseconds *int64 `json:"MeanTimeToRecoverInMilliseconds,omitempty"`
	OpenProactiveInsights           *int64 `json:"OpenProactiveInsights,omitempty"`
	OpenReactiveInsights            *int64 `json:"OpenReactiveInsights,omitempty"`
}
