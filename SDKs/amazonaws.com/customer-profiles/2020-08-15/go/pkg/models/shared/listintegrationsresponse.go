package shared

type ListIntegrationsResponse struct {
	Items     []ListIntegrationItem `json:"Items,omitempty"`
	NextToken *string               `json:"NextToken,omitempty"`
}
