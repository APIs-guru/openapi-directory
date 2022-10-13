package shared

type AdditionalAuthenticationProvider struct {
	AuthenticationType     *AuthenticationTypeEnum `json:"authenticationType"`
	LambdaAuthorizerConfig *LambdaAuthorizerConfig `json:"lambdaAuthorizerConfig"`
	OpenIDConnectConfig    *OpenIDConnectConfig    `json:"openIDConnectConfig"`
	UserPoolConfig         *CognitoUserPoolConfig  `json:"userPoolConfig"`
}
