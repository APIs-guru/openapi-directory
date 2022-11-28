package shared

// GetApplicationRevisionInput
// Represents the input of a <code>GetApplicationRevision</code> operation.
type GetApplicationRevisionInput struct {
	ApplicationName string           `json:"applicationName"`
	Revision        RevisionLocation `json:"revision"`
}
