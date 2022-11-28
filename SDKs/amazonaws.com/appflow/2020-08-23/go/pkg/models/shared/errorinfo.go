package shared

// ErrorInfo
//
//	Provides details in the event of a failed flow, including the failure count and the related error messages.
type ErrorInfo struct {
	ExecutionMessage *string `json:"executionMessage,omitempty"`
	PutFailuresCount *int64  `json:"putFailuresCount,omitempty"`
}
