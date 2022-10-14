package shared

type DeleteInfrastructureConfigurationResponse struct {
	InfrastructureConfigurationArn *string `json:"infrastructureConfigurationArn,omitempty"`
	RequestID                      *string `json:"requestId,omitempty"`
}
