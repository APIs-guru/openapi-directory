package shared



type ListDistributionConfigurationsResponse struct {
    DistributionConfigurationSummaryList []DistributionConfigurationSummary `json:"distributionConfigurationSummaryList,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

