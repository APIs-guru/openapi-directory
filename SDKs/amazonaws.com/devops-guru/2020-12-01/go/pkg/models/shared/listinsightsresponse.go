package shared

type ListInsightsResponse struct {
	NextToken         *string                   `json:"NextToken"`
	ProactiveInsights []ProactiveInsightSummary `json:"ProactiveInsights"`
	ReactiveInsights  []ReactiveInsightSummary  `json:"ReactiveInsights"`
}
