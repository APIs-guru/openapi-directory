package shared



type UpdateBackendAuthUserPoolConfig struct {
    ForgotPassword *UpdateBackendAuthForgotPasswordConfig `json:"ForgotPassword,omitempty"`
    Mfa *UpdateBackendAuthMfaConfig `json:"Mfa,omitempty"`
    OAuth *UpdateBackendAuthOAuthConfig `json:"OAuth,omitempty"`
    PasswordPolicy *UpdateBackendAuthPasswordPolicyConfig `json:"PasswordPolicy,omitempty"`
    
}

