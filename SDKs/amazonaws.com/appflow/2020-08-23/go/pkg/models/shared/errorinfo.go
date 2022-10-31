package shared



type ErrorInfo struct {
    ExecutionMessage *string `json:"executionMessage,omitempty"`
    PutFailuresCount *int64 `json:"putFailuresCount,omitempty"`
    
}

