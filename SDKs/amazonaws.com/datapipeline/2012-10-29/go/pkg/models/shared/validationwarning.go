package shared

// ValidationWarning
// Defines a validation warning. Validation warnings do not prevent pipeline activation. The set of validation warnings that can be returned are defined by AWS Data Pipeline.
type ValidationWarning struct {
	ID       *string  `json:"id,omitempty"`
	Warnings []string `json:"warnings,omitempty"`
}
