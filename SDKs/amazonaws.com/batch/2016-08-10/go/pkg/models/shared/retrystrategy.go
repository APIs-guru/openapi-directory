package shared

type RetryStrategy struct {
	Attempts       *int64           `json:"attempts,omitempty"`
	EvaluateOnExit []EvaluateOnExit `json:"evaluateOnExit,omitempty"`
}
