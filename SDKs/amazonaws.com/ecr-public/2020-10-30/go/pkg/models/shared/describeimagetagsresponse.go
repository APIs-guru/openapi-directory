package shared

type DescribeImageTagsResponse struct {
	ImageTagDetails []ImageTagDetail `json:"imageTagDetails"`
	NextToken       *string          `json:"nextToken"`
}
