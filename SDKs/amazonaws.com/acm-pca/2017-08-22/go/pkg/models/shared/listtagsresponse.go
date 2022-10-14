package shared

type ListTagsResponse struct {
	NextToken *string `json:"NextToken,omitempty"`
	Tags      []Tag   `json:"Tags,omitempty"`
}
