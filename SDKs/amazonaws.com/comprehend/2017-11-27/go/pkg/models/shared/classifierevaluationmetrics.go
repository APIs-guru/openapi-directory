package shared

// ClassifierEvaluationMetrics
// Describes the result metrics for the test data associated with an documentation classifier.
type ClassifierEvaluationMetrics struct {
	Accuracy       *float64 `json:"Accuracy,omitempty"`
	F1Score        *float64 `json:"F1Score,omitempty"`
	HammingLoss    *float64 `json:"HammingLoss,omitempty"`
	MicroF1Score   *float64 `json:"MicroF1Score,omitempty"`
	MicroPrecision *float64 `json:"MicroPrecision,omitempty"`
	MicroRecall    *float64 `json:"MicroRecall,omitempty"`
	Precision      *float64 `json:"Precision,omitempty"`
	Recall         *float64 `json:"Recall,omitempty"`
}
