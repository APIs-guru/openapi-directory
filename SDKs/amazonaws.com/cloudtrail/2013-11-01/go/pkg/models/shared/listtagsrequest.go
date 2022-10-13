package shared

type ListTagsRequest struct {
	NextToken      *string  `json:"NextToken"`
	ResourceIDList []string `json:"ResourceIdList"`
}
