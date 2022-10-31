package shared



type Metric struct {
    Expression string `json:"expression"`
    ProcessingConfig *MetricProcessingConfig `json:"processingConfig,omitempty"`
    Variables []ExpressionVariable `json:"variables"`
    Window MetricWindow `json:"window"`
    
}

