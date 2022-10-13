package shared

type BatchStatementError struct {
	Code    *BatchStatementErrorCodeEnumEnum `json:"Code"`
	Message *string                          `json:"Message"`
}
