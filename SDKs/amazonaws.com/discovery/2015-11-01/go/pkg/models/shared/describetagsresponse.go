package shared

type DescribeTagsResponse struct {
	NextToken *string            `json:"nextToken"`
	Tags      []ConfigurationTag `json:"tags"`
}
