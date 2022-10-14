package shared

type ListInfrastructureConfigurationsResponse struct {
	InfrastructureConfigurationSummaryList []InfrastructureConfigurationSummary `json:"infrastructureConfigurationSummaryList,omitempty"`
	NextToken                              *string                              `json:"nextToken,omitempty"`
	RequestID                              *string                              `json:"requestId,omitempty"`
}
