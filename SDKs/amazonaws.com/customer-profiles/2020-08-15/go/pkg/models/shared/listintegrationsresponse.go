package shared

type ListIntegrationsResponse struct {
	Items     []ListIntegrationItem `json:"Items"`
	NextToken *string               `json:"NextToken"`
}
