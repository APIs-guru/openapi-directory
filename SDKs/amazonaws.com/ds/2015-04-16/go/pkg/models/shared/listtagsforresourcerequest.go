package shared

type ListTagsForResourceRequest struct {
	Limit      *int64  `json:"Limit"`
	NextToken  *string `json:"NextToken"`
	ResourceID string  `json:"ResourceId"`
}
