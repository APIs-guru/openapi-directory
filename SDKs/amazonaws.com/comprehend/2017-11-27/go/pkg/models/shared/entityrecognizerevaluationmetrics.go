package shared

type EntityRecognizerEvaluationMetrics struct {
	F1Score   *float64 `json:"F1Score"`
	Precision *float64 `json:"Precision"`
	Recall    *float64 `json:"Recall"`
}
