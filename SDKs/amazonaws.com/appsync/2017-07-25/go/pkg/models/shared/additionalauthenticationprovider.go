package shared

type AdditionalAuthenticationProvider struct {
	AuthenticationType     *AuthenticationTypeEnum `json:"authenticationType,omitempty"`
	LambdaAuthorizerConfig *LambdaAuthorizerConfig `json:"lambdaAuthorizerConfig,omitempty"`
	OpenIDConnectConfig    *OpenIDConnectConfig    `json:"openIDConnectConfig,omitempty"`
	UserPoolConfig         *CognitoUserPoolConfig  `json:"userPoolConfig,omitempty"`
}
