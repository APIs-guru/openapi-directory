package shared

// BatchStopJobRunSuccessfulSubmission
// Records a successful request to stop a specified <code>JobRun</code>.
type BatchStopJobRunSuccessfulSubmission struct {
	JobName  *string `json:"JobName,omitempty"`
	JobRunID *string `json:"JobRunId,omitempty"`
}
