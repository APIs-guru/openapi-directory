package shared

type DescribeInsightResponse struct {
	ProactiveInsight *ProactiveInsight `json:"ProactiveInsight"`
	ReactiveInsight  *ReactiveInsight  `json:"ReactiveInsight"`
}
