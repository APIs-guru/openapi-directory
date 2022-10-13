package shared

type GetDistributionConfigurationResponse struct {
	DistributionConfiguration *DistributionConfiguration `json:"distributionConfiguration"`
	RequestID                 *string                    `json:"requestId"`
}
