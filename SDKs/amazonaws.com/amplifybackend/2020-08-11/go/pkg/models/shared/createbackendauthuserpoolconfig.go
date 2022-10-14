package shared

type CreateBackendAuthUserPoolConfig struct {
	ForgotPassword           *CreateBackendAuthForgotPasswordConfig `json:"ForgotPassword,omitempty"`
	Mfa                      *CreateBackendAuthMfaConfig            `json:"Mfa,omitempty"`
	OAuth                    *CreateBackendAuthOAuthConfig          `json:"OAuth,omitempty"`
	PasswordPolicy           *CreateBackendAuthPasswordPolicyConfig `json:"PasswordPolicy,omitempty"`
	RequiredSignUpAttributes []RequiredSignUpAttributesElementEnum  `json:"RequiredSignUpAttributes"`
	SignInMethod             SignInMethodEnum                       `json:"SignInMethod"`
	UserPoolName             string                                 `json:"UserPoolName"`
}
