package shared

type DescribeImagesResponse struct {
	ImageDetails []ImageDetail `json:"imageDetails"`
	NextToken    *string       `json:"nextToken"`
}
