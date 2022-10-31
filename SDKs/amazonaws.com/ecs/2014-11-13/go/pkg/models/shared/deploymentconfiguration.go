package shared



type DeploymentConfiguration struct {
    DeploymentCircuitBreaker *DeploymentCircuitBreaker `json:"deploymentCircuitBreaker,omitempty"`
    MaximumPercent *int64 `json:"maximumPercent,omitempty"`
    MinimumHealthyPercent *int64 `json:"minimumHealthyPercent,omitempty"`
    
}

