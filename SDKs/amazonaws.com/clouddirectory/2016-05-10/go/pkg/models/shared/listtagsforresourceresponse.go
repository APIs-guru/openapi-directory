package shared

type ListTagsForResourceResponse struct {
	NextToken *string `json:"NextToken,omitempty"`
	Tags      []Tag   `json:"Tags,omitempty"`
}
