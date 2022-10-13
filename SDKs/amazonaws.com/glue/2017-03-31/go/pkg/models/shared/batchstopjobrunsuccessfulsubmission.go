package shared

type BatchStopJobRunSuccessfulSubmission struct {
	JobName  *string `json:"JobName"`
	JobRunID *string `json:"JobRunId"`
}
