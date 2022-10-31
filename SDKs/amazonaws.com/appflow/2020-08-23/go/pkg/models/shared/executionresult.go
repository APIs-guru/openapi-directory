package shared



type ExecutionResult struct {
    BytesProcessed *int64 `json:"bytesProcessed,omitempty"`
    BytesWritten *int64 `json:"bytesWritten,omitempty"`
    ErrorInfo *ErrorInfo `json:"errorInfo,omitempty"`
    RecordsProcessed *int64 `json:"recordsProcessed,omitempty"`
    
}

