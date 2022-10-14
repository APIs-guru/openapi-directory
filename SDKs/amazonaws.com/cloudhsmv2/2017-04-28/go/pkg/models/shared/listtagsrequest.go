package shared

type ListTagsRequest struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	ResourceID string  `json:"ResourceId"`
}
