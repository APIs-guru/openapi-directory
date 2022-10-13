package shared

type DeleteInfrastructureConfigurationResponse struct {
	InfrastructureConfigurationArn *string `json:"infrastructureConfigurationArn"`
	RequestID                      *string `json:"requestId"`
}
