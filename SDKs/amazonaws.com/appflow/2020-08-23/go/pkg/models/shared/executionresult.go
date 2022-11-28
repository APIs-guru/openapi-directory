package shared

// ExecutionResult
//
//	Specifies the end result of the flow run.
type ExecutionResult struct {
	BytesProcessed   *int64     `json:"bytesProcessed,omitempty"`
	BytesWritten     *int64     `json:"bytesWritten,omitempty"`
	ErrorInfo        *ErrorInfo `json:"errorInfo,omitempty"`
	RecordsProcessed *int64     `json:"recordsProcessed,omitempty"`
}
