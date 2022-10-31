package shared



type DescribeInsightResponse struct {
    ProactiveInsight *ProactiveInsight `json:"ProactiveInsight,omitempty"`
    ReactiveInsight *ReactiveInsight `json:"ReactiveInsight,omitempty"`
    
}

