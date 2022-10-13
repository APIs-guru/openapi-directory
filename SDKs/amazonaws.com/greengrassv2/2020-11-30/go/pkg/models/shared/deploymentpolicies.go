package shared

type DeploymentPolicies struct {
	ComponentUpdatePolicy         *DeploymentComponentUpdatePolicy         `json:"componentUpdatePolicy"`
	ConfigurationValidationPolicy *DeploymentConfigurationValidationPolicy `json:"configurationValidationPolicy"`
	FailureHandlingPolicy         *DeploymentFailureHandlingPolicyEnum     `json:"failureHandlingPolicy"`
}
