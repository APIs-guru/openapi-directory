package shared

type ListTagsRequest struct {
	NextToken      *string  `json:"NextToken,omitempty"`
	ResourceIDList []string `json:"ResourceIdList"`
}
