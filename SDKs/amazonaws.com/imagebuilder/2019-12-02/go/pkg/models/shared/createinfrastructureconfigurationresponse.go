package shared

type CreateInfrastructureConfigurationResponse struct {
	ClientToken                    *string `json:"clientToken"`
	InfrastructureConfigurationArn *string `json:"infrastructureConfigurationArn"`
	RequestID                      *string `json:"requestId"`
}
