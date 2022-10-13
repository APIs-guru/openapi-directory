package shared

type GetModelsResponse struct {
	Items     []Model `json:"Items"`
	NextToken *string `json:"NextToken"`
}
