package shared

type UpdateDistributionConfigurationResponse struct {
	ClientToken                  *string `json:"clientToken"`
	DistributionConfigurationArn *string `json:"distributionConfigurationArn"`
	RequestID                    *string `json:"requestId"`
}
