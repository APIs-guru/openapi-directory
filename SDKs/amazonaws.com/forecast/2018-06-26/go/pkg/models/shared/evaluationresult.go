package shared

// EvaluationResult
// The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response.
type EvaluationResult struct {
	AlgorithmArn *string         `json:"AlgorithmArn,omitempty"`
	TestWindows  []WindowSummary `json:"TestWindows,omitempty"`
}
