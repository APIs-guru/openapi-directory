package shared

// ActionParameter
// Describes a parameter for an action.
type ActionParameter struct {
	Description *string `json:"description,omitempty"`
	Required    *bool   `json:"required,omitempty"`
}
