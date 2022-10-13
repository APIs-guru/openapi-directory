package shared

type ClassifierEvaluationMetrics struct {
	Accuracy       *float64 `json:"Accuracy"`
	F1Score        *float64 `json:"F1Score"`
	HammingLoss    *float64 `json:"HammingLoss"`
	MicroF1Score   *float64 `json:"MicroF1Score"`
	MicroPrecision *float64 `json:"MicroPrecision"`
	MicroRecall    *float64 `json:"MicroRecall"`
	Precision      *float64 `json:"Precision"`
	Recall         *float64 `json:"Recall"`
}
