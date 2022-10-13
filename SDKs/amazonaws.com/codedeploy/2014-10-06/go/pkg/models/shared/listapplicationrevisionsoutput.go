package shared

type ListApplicationRevisionsOutput struct {
	NextToken *string            `json:"nextToken"`
	Revisions []RevisionLocation `json:"revisions"`
}
