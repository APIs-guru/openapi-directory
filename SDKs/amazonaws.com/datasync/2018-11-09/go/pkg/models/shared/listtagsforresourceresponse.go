package shared

// ListTagsForResourceResponse
// ListTagsForResourceResponse
type ListTagsForResourceResponse struct {
	NextToken *string        `json:"NextToken,omitempty"`
	Tags      []TagListEntry `json:"Tags,omitempty"`
}
