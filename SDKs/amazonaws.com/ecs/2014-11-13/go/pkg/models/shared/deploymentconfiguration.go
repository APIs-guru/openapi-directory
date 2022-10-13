package shared

type DeploymentConfiguration struct {
	DeploymentCircuitBreaker *DeploymentCircuitBreaker `json:"deploymentCircuitBreaker"`
	MaximumPercent           *int64                    `json:"maximumPercent"`
	MinimumHealthyPercent    *int64                    `json:"minimumHealthyPercent"`
}
