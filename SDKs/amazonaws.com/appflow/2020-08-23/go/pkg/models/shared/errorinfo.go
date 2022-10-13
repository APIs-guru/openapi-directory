package shared

type ErrorInfo struct {
	ExecutionMessage *string `json:"executionMessage"`
	PutFailuresCount *int64  `json:"putFailuresCount"`
}
