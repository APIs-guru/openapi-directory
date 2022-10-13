package shared

type BatchStopJobRunError struct {
	ErrorDetail *ErrorDetail `json:"ErrorDetail"`
	JobName     *string      `json:"JobName"`
	JobRunID    *string      `json:"JobRunId"`
}
