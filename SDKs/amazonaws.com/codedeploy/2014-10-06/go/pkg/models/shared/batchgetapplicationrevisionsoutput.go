package shared

// BatchGetApplicationRevisionsOutput
// Represents the output of a <code>BatchGetApplicationRevisions</code> operation.
type BatchGetApplicationRevisionsOutput struct {
	ApplicationName *string        `json:"applicationName,omitempty"`
	ErrorMessage    *string        `json:"errorMessage,omitempty"`
	Revisions       []RevisionInfo `json:"revisions,omitempty"`
}
