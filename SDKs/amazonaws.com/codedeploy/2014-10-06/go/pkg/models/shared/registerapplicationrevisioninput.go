package shared

// RegisterApplicationRevisionInput
// Represents the input of a RegisterApplicationRevision operation.
type RegisterApplicationRevisionInput struct {
	ApplicationName string           `json:"applicationName"`
	Description     *string          `json:"description,omitempty"`
	Revision        RevisionLocation `json:"revision"`
}
