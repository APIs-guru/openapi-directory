package shared

// UpdateApplicationInput
// Represents the input of an <code>UpdateApplication</code> operation.
type UpdateApplicationInput struct {
	ApplicationName    *string `json:"applicationName,omitempty"`
	NewApplicationName *string `json:"newApplicationName,omitempty"`
}
