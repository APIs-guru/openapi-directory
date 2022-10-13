package shared

type ListAccountIntegrationsResponse struct {
	Items     []ListIntegrationItem `json:"Items"`
	NextToken *string               `json:"NextToken"`
}
