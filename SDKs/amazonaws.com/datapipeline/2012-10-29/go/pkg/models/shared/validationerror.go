package shared

// ValidationError
// Defines a validation error. Validation errors prevent pipeline activation. The set of validation errors that can be returned are defined by AWS Data Pipeline.
type ValidationError struct {
	Errors []string `json:"errors,omitempty"`
	ID     *string  `json:"id,omitempty"`
}
