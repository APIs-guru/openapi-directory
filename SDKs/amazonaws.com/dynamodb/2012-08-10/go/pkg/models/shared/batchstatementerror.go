package shared

// BatchStatementError
//
//	An error associated with a statement in a PartiQL batch that was run.
type BatchStatementError struct {
	Code    *BatchStatementErrorCodeEnumEnum `json:"Code,omitempty"`
	Message *string                          `json:"Message,omitempty"`
}
