package shared



type EntityRecognizerEvaluationMetrics struct {
    F1Score *float64 `json:"F1Score,omitempty"`
    Precision *float64 `json:"Precision,omitempty"`
    Recall *float64 `json:"Recall,omitempty"`
    
}

