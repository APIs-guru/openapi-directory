package shared



type GetInfrastructureConfigurationResponse struct {
    InfrastructureConfiguration *InfrastructureConfiguration `json:"infrastructureConfiguration,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

