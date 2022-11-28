package shared

// ValidationError
// Information about an error found in a behavior specification.
type ValidationError struct {
	ErrorMessage *string `json:"errorMessage,omitempty"`
}
