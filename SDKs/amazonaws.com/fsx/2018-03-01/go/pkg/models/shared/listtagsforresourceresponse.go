package shared

// ListTagsForResourceResponse
// The response object for <code>ListTagsForResource</code> operation.
type ListTagsForResourceResponse struct {
	NextToken *string `json:"NextToken,omitempty"`
	Tags      []Tag   `json:"Tags,omitempty"`
}
