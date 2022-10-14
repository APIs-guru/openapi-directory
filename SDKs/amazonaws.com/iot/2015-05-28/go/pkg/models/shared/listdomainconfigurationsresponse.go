package shared

type ListDomainConfigurationsResponse struct {
	DomainConfigurations []DomainConfigurationSummary `json:"domainConfigurations,omitempty"`
	NextMarker           *string                      `json:"nextMarker,omitempty"`
}
