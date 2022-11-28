package shared

// ListArtifactsRequest
// Represents a request to the list artifacts operation.
type ListArtifactsRequest struct {
	Arn       string               `json:"arn"`
	NextToken *string              `json:"nextToken,omitempty"`
	Type      ArtifactCategoryEnum `json:"type"`
}
