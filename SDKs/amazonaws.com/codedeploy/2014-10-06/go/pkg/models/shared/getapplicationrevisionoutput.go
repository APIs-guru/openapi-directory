package shared

// GetApplicationRevisionOutput
// Represents the output of a <code>GetApplicationRevision</code> operation.
type GetApplicationRevisionOutput struct {
	ApplicationName *string              `json:"applicationName,omitempty"`
	Revision        *RevisionLocation    `json:"revision,omitempty"`
	RevisionInfo    *GenericRevisionInfo `json:"revisionInfo,omitempty"`
}
