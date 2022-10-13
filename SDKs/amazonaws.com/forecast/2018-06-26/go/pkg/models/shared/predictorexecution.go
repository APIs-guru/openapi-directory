package shared

type PredictorExecution struct {
	AlgorithmArn *string             `json:"AlgorithmArn"`
	TestWindows  []TestWindowSummary `json:"TestWindows"`
}
