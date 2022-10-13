package shared

type ListDomainConfigurationsResponse struct {
	DomainConfigurations []DomainConfigurationSummary `json:"domainConfigurations"`
	NextMarker           *string                      `json:"nextMarker"`
}
