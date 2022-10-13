package shared

type BatchGetApplicationRevisionsOutput struct {
	ApplicationName *string        `json:"applicationName"`
	ErrorMessage    *string        `json:"errorMessage"`
	Revisions       []RevisionInfo `json:"revisions"`
}
