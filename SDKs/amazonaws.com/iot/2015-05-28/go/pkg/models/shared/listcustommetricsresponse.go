package shared



type ListCustomMetricsResponse struct {
    MetricNames []string `json:"metricNames,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

