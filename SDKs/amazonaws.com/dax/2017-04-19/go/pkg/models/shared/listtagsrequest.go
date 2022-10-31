package shared

type ListTagsRequest struct {
	NextToken    *string `json:"NextToken,omitempty"`
	ResourceName string  `json:"ResourceName"`
}
