package shared

type BatchStatementError struct {
	Code    *BatchStatementErrorCodeEnumEnum `json:"Code,omitempty"`
	Message *string                          `json:"Message,omitempty"`
}
