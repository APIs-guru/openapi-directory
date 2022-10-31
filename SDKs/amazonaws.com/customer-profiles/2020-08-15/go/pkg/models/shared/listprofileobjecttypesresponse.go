package shared

type ListProfileObjectTypesResponse struct {
	Items     []ListProfileObjectTypeItem `json:"Items,omitempty"`
	NextToken *string                     `json:"NextToken,omitempty"`
}
