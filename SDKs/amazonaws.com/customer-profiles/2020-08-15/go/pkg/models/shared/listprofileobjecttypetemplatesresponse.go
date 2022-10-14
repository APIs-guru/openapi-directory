package shared

type ListProfileObjectTypeTemplatesResponse struct {
	Items     []ListProfileObjectTypeTemplateItem `json:"Items,omitempty"`
	NextToken *string                             `json:"NextToken,omitempty"`
}
