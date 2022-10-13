package shared

type ListArtifactsRequest struct {
	Arn       string               `json:"arn"`
	NextToken *string              `json:"nextToken"`
	Type      ArtifactCategoryEnum `json:"type"`
}
