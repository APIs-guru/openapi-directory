package shared



type InsightHealth struct {
    MeanTimeToRecoverInMilliseconds *int64 `json:"MeanTimeToRecoverInMilliseconds,omitempty"`
    OpenProactiveInsights *int64 `json:"OpenProactiveInsights,omitempty"`
    OpenReactiveInsights *int64 `json:"OpenReactiveInsights,omitempty"`
    
}

