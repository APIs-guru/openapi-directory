package shared

type ListAnomaliesForInsightResponse struct {
	NextToken          *string                   `json:"NextToken,omitempty"`
	ProactiveAnomalies []ProactiveAnomalySummary `json:"ProactiveAnomalies,omitempty"`
	ReactiveAnomalies  []ReactiveAnomalySummary  `json:"ReactiveAnomalies,omitempty"`
}
