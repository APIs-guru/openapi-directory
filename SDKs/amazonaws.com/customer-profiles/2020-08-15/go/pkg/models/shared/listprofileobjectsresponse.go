package shared

type ListProfileObjectsResponse struct {
	Items     []ListProfileObjectsItem `json:"Items,omitempty"`
	NextToken *string                  `json:"NextToken,omitempty"`
}
