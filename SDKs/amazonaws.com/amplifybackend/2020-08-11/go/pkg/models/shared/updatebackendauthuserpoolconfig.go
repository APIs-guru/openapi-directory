package shared

type UpdateBackendAuthUserPoolConfig struct {
	ForgotPassword *UpdateBackendAuthForgotPasswordConfig `json:"ForgotPassword"`
	Mfa            *UpdateBackendAuthMfaConfig            `json:"Mfa"`
	OAuth          *UpdateBackendAuthOAuthConfig          `json:"OAuth"`
	PasswordPolicy *UpdateBackendAuthPasswordPolicyConfig `json:"PasswordPolicy"`
}
