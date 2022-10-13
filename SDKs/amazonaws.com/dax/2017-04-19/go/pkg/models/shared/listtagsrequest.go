package shared

type ListTagsRequest struct {
	NextToken    *string `json:"NextToken"`
	ResourceName string  `json:"ResourceName"`
}
