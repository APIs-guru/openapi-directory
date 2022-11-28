package shared

// DeploymentPolicies
// Contains information about policies that define how a deployment updates components and handles failure.
type DeploymentPolicies struct {
	ComponentUpdatePolicy         *DeploymentComponentUpdatePolicy         `json:"componentUpdatePolicy,omitempty"`
	ConfigurationValidationPolicy *DeploymentConfigurationValidationPolicy `json:"configurationValidationPolicy,omitempty"`
	FailureHandlingPolicy         *DeploymentFailureHandlingPolicyEnum     `json:"failureHandlingPolicy,omitempty"`
}
