package shared

type SearchInsightsResponse struct {
	NextToken         *string                   `json:"NextToken"`
	ProactiveInsights []ProactiveInsightSummary `json:"ProactiveInsights"`
	ReactiveInsights  []ReactiveInsightSummary  `json:"ReactiveInsights"`
}
