package shared

// DeploymentConfiguration
// Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks.
type DeploymentConfiguration struct {
	DeploymentCircuitBreaker *DeploymentCircuitBreaker `json:"deploymentCircuitBreaker,omitempty"`
	MaximumPercent           *int64                    `json:"maximumPercent,omitempty"`
	MinimumHealthyPercent    *int64                    `json:"minimumHealthyPercent,omitempty"`
}
