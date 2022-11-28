package shared

// ListTagsRequest
// Specifies a list of trail tags to return.
type ListTagsRequest struct {
	NextToken      *string  `json:"NextToken,omitempty"`
	ResourceIDList []string `json:"ResourceIdList"`
}
