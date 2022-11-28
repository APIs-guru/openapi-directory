package shared

// RetryStrategy
// The retry strategy associated with a job. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/job_retries.html">Automated job retries</a> in the <i>Batch User Guide</i>.
type RetryStrategy struct {
	Attempts       *int64           `json:"attempts,omitempty"`
	EvaluateOnExit []EvaluateOnExit `json:"evaluateOnExit,omitempty"`
}
