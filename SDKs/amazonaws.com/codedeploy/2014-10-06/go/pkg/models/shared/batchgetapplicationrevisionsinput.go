package shared

type BatchGetApplicationRevisionsInput struct {
	ApplicationName string             `json:"applicationName"`
	Revisions       []RevisionLocation `json:"revisions"`
}
