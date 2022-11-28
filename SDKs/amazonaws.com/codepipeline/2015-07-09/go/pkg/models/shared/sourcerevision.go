package shared

// SourceRevision
// Information about the version (or revision) of a source artifact that initiated a pipeline execution.
type SourceRevision struct {
	ActionName      string  `json:"actionName"`
	RevisionID      *string `json:"revisionId,omitempty"`
	RevisionSummary *string `json:"revisionSummary,omitempty"`
	RevisionURL     *string `json:"revisionUrl,omitempty"`
}
