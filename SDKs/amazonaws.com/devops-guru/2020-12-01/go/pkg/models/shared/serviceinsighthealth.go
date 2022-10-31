package shared



type ServiceInsightHealth struct {
    OpenProactiveInsights *int64 `json:"OpenProactiveInsights,omitempty"`
    OpenReactiveInsights *int64 `json:"OpenReactiveInsights,omitempty"`
    
}

