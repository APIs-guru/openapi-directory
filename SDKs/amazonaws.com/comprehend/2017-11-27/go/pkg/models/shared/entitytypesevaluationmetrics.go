package shared

// EntityTypesEvaluationMetrics
// Detailed information about the accuracy of an entity recognizer for a specific entity type.
type EntityTypesEvaluationMetrics struct {
	F1Score   *float64 `json:"F1Score,omitempty"`
	Precision *float64 `json:"Precision,omitempty"`
	Recall    *float64 `json:"Recall,omitempty"`
}
