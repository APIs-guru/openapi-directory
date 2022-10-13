package shared

type CreateBackendAuthUserPoolConfig struct {
	ForgotPassword           *CreateBackendAuthForgotPasswordConfig `json:"ForgotPassword"`
	Mfa                      *CreateBackendAuthMfaConfig            `json:"Mfa"`
	OAuth                    *CreateBackendAuthOAuthConfig          `json:"OAuth"`
	PasswordPolicy           *CreateBackendAuthPasswordPolicyConfig `json:"PasswordPolicy"`
	RequiredSignUpAttributes []RequiredSignUpAttributesElementEnum  `json:"RequiredSignUpAttributes"`
	SignInMethod             SignInMethodEnum                       `json:"SignInMethod"`
	UserPoolName             string                                 `json:"UserPoolName"`
}
