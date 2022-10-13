package shared

type ListProfileObjectTypeTemplatesResponse struct {
	Items     []ListProfileObjectTypeTemplateItem `json:"Items"`
	NextToken *string                             `json:"NextToken"`
}
