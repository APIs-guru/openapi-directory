package shared

type InsightHealth struct {
	MeanTimeToRecoverInMilliseconds *int64 `json:"MeanTimeToRecoverInMilliseconds"`
	OpenProactiveInsights           *int64 `json:"OpenProactiveInsights"`
	OpenReactiveInsights            *int64 `json:"OpenReactiveInsights"`
}
