package shared

type ListProfileObjectTypesResponse struct {
	Items     []ListProfileObjectTypeItem `json:"Items"`
	NextToken *string                     `json:"NextToken"`
}
