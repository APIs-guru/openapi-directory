package shared

type ListAnomaliesForInsightResponse struct {
	NextToken          *string                   `json:"NextToken"`
	ProactiveAnomalies []ProactiveAnomalySummary `json:"ProactiveAnomalies"`
	ReactiveAnomalies  []ReactiveAnomalySummary  `json:"ReactiveAnomalies"`
}
