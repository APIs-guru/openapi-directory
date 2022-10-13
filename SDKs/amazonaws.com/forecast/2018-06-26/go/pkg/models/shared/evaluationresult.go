package shared

type EvaluationResult struct {
	AlgorithmArn *string         `json:"AlgorithmArn"`
	TestWindows  []WindowSummary `json:"TestWindows"`
}
