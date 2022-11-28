package shared

// UpdateBackendAuthUserPoolConfig
// Describes the Amazon Cognito user pool configuration for the authorization resource to be configured for your Amplify project on an update.
type UpdateBackendAuthUserPoolConfig struct {
	ForgotPassword *UpdateBackendAuthForgotPasswordConfig `json:"ForgotPassword,omitempty"`
	Mfa            *UpdateBackendAuthMfaConfig            `json:"Mfa,omitempty"`
	OAuth          *UpdateBackendAuthOAuthConfig          `json:"OAuth,omitempty"`
	PasswordPolicy *UpdateBackendAuthPasswordPolicyConfig `json:"PasswordPolicy,omitempty"`
}
