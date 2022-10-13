package shared

type ListInfrastructureConfigurationsResponse struct {
	InfrastructureConfigurationSummaryList []InfrastructureConfigurationSummary `json:"infrastructureConfigurationSummaryList"`
	NextToken                              *string                              `json:"nextToken"`
	RequestID                              *string                              `json:"requestId"`
}
