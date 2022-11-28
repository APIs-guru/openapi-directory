package shared

// UpdateBackendAuthPasswordPolicyConfig
// Describes the password policy for your Amazon Cognito user pool configured as a part of your Amplify project.
type UpdateBackendAuthPasswordPolicyConfig struct {
	AdditionalConstraints []AdditionalConstraintsElementEnum `json:"AdditionalConstraints,omitempty"`
	MinimumLength         *float64                           `json:"MinimumLength,omitempty"`
}
