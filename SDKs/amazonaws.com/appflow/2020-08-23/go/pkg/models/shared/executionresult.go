package shared

type ExecutionResult struct {
	BytesProcessed   *int64     `json:"bytesProcessed"`
	BytesWritten     *int64     `json:"bytesWritten"`
	ErrorInfo        *ErrorInfo `json:"errorInfo"`
	RecordsProcessed *int64     `json:"recordsProcessed"`
}
