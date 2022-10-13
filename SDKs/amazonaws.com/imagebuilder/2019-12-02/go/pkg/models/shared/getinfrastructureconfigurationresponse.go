package shared

type GetInfrastructureConfigurationResponse struct {
	InfrastructureConfiguration *InfrastructureConfiguration `json:"infrastructureConfiguration"`
	RequestID                   *string                      `json:"requestId"`
}
