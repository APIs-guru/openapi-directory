package shared

type GetIntegrationsResponse struct {
	Items     []Integration `json:"Items"`
	NextToken *string       `json:"NextToken"`
}
