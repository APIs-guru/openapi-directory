package shared



type DeploymentPolicies struct {
    ComponentUpdatePolicy *DeploymentComponentUpdatePolicy `json:"componentUpdatePolicy,omitempty"`
    ConfigurationValidationPolicy *DeploymentConfigurationValidationPolicy `json:"configurationValidationPolicy,omitempty"`
    FailureHandlingPolicy *DeploymentFailureHandlingPolicyEnum `json:"failureHandlingPolicy,omitempty"`
    
}

