package shared



type GetDistributionConfigurationResponse struct {
    DistributionConfiguration *DistributionConfiguration `json:"distributionConfiguration,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

