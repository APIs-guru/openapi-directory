package shared

// BatchStopJobRunError
// Records an error that occurred when attempting to stop a specified job run.
type BatchStopJobRunError struct {
	ErrorDetail *ErrorDetail `json:"ErrorDetail,omitempty"`
	JobName     *string      `json:"JobName,omitempty"`
	JobRunID    *string      `json:"JobRunId,omitempty"`
}
