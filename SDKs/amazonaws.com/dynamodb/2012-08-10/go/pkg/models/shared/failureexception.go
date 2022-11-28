package shared

// FailureException
// Represents a failure a contributor insights operation.
type FailureException struct {
	ExceptionDescription *string `json:"ExceptionDescription,omitempty"`
	ExceptionName        *string `json:"ExceptionName,omitempty"`
}
