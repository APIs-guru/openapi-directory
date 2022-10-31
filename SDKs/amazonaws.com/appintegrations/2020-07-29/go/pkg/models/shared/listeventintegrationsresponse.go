package shared

type ListEventIntegrationsResponse struct {
	EventIntegrations []EventIntegration `json:"EventIntegrations,omitempty"`
	NextToken         *string            `json:"NextToken,omitempty"`
}
