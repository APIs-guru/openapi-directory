package shared

type SourceRevision struct {
	ActionName      string  `json:"actionName"`
	RevisionID      *string `json:"revisionId"`
	RevisionSummary *string `json:"revisionSummary"`
	RevisionURL     *string `json:"revisionUrl"`
}
