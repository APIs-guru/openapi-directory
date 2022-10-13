package shared

type RetryStrategy struct {
	Attempts       *int64           `json:"attempts"`
	EvaluateOnExit []EvaluateOnExit `json:"evaluateOnExit"`
}
