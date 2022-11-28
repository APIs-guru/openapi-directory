package shared

// ListTagsResponse
// Returns the objects or data listed below if successful. Otherwise, returns an error.
type ListTagsResponse struct {
	NextToken       *string       `json:"NextToken,omitempty"`
	ResourceTagList []ResourceTag `json:"ResourceTagList,omitempty"`
}
