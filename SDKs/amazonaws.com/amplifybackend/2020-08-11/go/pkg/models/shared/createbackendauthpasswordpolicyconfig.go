package shared

// CreateBackendAuthPasswordPolicyConfig
// The password policy configuration for the backend to your Amplify project.
type CreateBackendAuthPasswordPolicyConfig struct {
	AdditionalConstraints []AdditionalConstraintsElementEnum `json:"AdditionalConstraints,omitempty"`
	MinimumLength         float64                            `json:"MinimumLength"`
}
