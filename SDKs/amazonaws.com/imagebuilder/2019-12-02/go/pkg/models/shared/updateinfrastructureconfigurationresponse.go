package shared

type UpdateInfrastructureConfigurationResponse struct {
	ClientToken                    *string `json:"clientToken"`
	InfrastructureConfigurationArn *string `json:"infrastructureConfigurationArn"`
	RequestID                      *string `json:"requestId"`
}
