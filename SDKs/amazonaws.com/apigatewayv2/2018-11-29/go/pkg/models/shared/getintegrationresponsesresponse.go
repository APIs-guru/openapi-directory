package shared

type GetIntegrationResponsesResponse struct {
	Items     []IntegrationResponse `json:"Items"`
	NextToken *string               `json:"NextToken"`
}
