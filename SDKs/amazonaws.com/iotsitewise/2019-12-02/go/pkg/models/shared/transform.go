package shared



type Transform struct {
    Expression string `json:"expression"`
    ProcessingConfig *TransformProcessingConfig `json:"processingConfig,omitempty"`
    Variables []ExpressionVariable `json:"variables"`
    
}

