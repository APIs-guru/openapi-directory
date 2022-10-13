package shared

type ListImagesResponse struct {
	ImageIds  []ImageIdentifier `json:"imageIds"`
	NextToken *string           `json:"nextToken"`
}
