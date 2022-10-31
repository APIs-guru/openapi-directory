package shared

type SourceRevision struct {
	ActionName      string  `json:"actionName"`
	RevisionID      *string `json:"revisionId,omitempty"`
	RevisionSummary *string `json:"revisionSummary,omitempty"`
	RevisionURL     *string `json:"revisionUrl,omitempty"`
}
