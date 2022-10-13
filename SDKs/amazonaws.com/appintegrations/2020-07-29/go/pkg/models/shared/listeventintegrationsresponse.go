package shared

type ListEventIntegrationsResponse struct {
	EventIntegrations []EventIntegration `json:"EventIntegrations"`
	NextToken         *string            `json:"NextToken"`
}
