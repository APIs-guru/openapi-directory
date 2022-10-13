package shared

type ListDistributionConfigurationsResponse struct {
	DistributionConfigurationSummaryList []DistributionConfigurationSummary `json:"distributionConfigurationSummaryList"`
	NextToken                            *string                            `json:"nextToken"`
	RequestID                            *string                            `json:"requestId"`
}
