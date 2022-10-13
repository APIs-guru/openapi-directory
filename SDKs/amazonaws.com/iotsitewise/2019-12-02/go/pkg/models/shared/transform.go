package shared

type Transform struct {
	Expression       string                     `json:"expression"`
	ProcessingConfig *TransformProcessingConfig `json:"processingConfig"`
	Variables        []ExpressionVariable       `json:"variables"`
}
