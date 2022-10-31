package shared

type ListArtifactsRequest struct {
	Arn       string               `json:"arn"`
	NextToken *string              `json:"nextToken,omitempty"`
	Type      ArtifactCategoryEnum `json:"type"`
}
