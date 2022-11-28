package shared

// BatchGetApplicationRevisionsInput
// Represents the input of a <code>BatchGetApplicationRevisions</code> operation.
type BatchGetApplicationRevisionsInput struct {
	ApplicationName string             `json:"applicationName"`
	Revisions       []RevisionLocation `json:"revisions"`
}
