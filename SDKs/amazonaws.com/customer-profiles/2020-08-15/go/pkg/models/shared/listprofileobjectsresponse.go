package shared

type ListProfileObjectsResponse struct {
	Items     []ListProfileObjectsItem `json:"Items"`
	NextToken *string                  `json:"NextToken"`
}
