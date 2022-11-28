package shared

// ListTagsForResourceRequest
// The request object for <code>ListTagsForResource</code> operation.
type ListTagsForResourceRequest struct {
	MaxResults  *int64  `json:"MaxResults,omitempty"`
	NextToken   *string `json:"NextToken,omitempty"`
	ResourceArn string  `json:"ResourceARN"`
}
