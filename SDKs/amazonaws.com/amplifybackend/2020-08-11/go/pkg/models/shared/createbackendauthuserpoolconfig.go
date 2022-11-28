package shared

// CreateBackendAuthUserPoolConfig
// Describes the Amazon Cognito user pool configuration for the auth resource to be configured for your Amplify project.
type CreateBackendAuthUserPoolConfig struct {
	ForgotPassword           *CreateBackendAuthForgotPasswordConfig `json:"ForgotPassword,omitempty"`
	Mfa                      *CreateBackendAuthMfaConfig            `json:"Mfa,omitempty"`
	OAuth                    *CreateBackendAuthOAuthConfig          `json:"OAuth,omitempty"`
	PasswordPolicy           *CreateBackendAuthPasswordPolicyConfig `json:"PasswordPolicy,omitempty"`
	RequiredSignUpAttributes []RequiredSignUpAttributesElementEnum  `json:"RequiredSignUpAttributes"`
	SignInMethod             SignInMethodEnum                       `json:"SignInMethod"`
	UserPoolName             string                                 `json:"UserPoolName"`
}
