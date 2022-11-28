package shared

// PredictorExecution
// The algorithm used to perform a backtest and the status of those tests.
type PredictorExecution struct {
	AlgorithmArn *string             `json:"AlgorithmArn,omitempty"`
	TestWindows  []TestWindowSummary `json:"TestWindows,omitempty"`
}
