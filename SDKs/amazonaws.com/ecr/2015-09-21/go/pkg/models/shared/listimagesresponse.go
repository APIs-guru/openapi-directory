package shared

type ListImagesResponse struct {
	ImageIds  []ImageIdentifier `json:"imageIds,omitempty"`
	NextToken *string           `json:"nextToken,omitempty"`
}
