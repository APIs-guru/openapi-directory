package shared

type DescribeImageTagsResponse struct {
	ImageTagDetails []ImageTagDetail `json:"imageTagDetails,omitempty"`
	NextToken       *string          `json:"nextToken,omitempty"`
}
