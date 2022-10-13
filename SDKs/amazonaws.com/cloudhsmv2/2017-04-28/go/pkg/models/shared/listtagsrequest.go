package shared

type ListTagsRequest struct {
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
	ResourceID string  `json:"ResourceId"`
}
