package shared



type BatchStopJobRunError struct {
    ErrorDetail *ErrorDetail `json:"ErrorDetail,omitempty"`
    JobName *string `json:"JobName,omitempty"`
    JobRunID *string `json:"JobRunId,omitempty"`
    
}

