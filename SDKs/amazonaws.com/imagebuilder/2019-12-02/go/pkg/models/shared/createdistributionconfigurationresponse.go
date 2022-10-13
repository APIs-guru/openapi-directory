package shared

type CreateDistributionConfigurationResponse struct {
	ClientToken                  *string `json:"clientToken"`
	DistributionConfigurationArn *string `json:"distributionConfigurationArn"`
	RequestID                    *string `json:"requestId"`
}
