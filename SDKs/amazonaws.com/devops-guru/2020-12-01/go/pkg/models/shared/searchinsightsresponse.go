package shared



type SearchInsightsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ProactiveInsights []ProactiveInsightSummary `json:"ProactiveInsights,omitempty"`
    ReactiveInsights []ReactiveInsightSummary `json:"ReactiveInsights,omitempty"`
    
}

