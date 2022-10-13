package shared

type ListTestGridSessionArtifactsRequest struct {
	MaxResult  *int64                               `json:"maxResult"`
	NextToken  *string                              `json:"nextToken"`
	SessionArn string                               `json:"sessionArn"`
	Type       *TestGridSessionArtifactCategoryEnum `json:"type"`
}
