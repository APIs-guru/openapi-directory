package shared

// EvaluationMetrics
// Evaluation metrics provide an estimate of the quality of your machine learning transform.
type EvaluationMetrics struct {
	FindMatchesMetrics *FindMatchesMetrics `json:"FindMatchesMetrics,omitempty"`
	TransformType      TransformTypeEnum   `json:"TransformType"`
}
