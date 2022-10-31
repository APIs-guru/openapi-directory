package shared



type ListInsightsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ProactiveInsights []ProactiveInsightSummary `json:"ProactiveInsights,omitempty"`
    ReactiveInsights []ReactiveInsightSummary `json:"ReactiveInsights,omitempty"`
    
}

