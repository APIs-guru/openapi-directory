package shared

type GraphqlAPI struct {
	AdditionalAuthenticationProviders []AdditionalAuthenticationProvider `json:"additionalAuthenticationProviders"`
	APIID                             *string                            `json:"apiId"`
	Arn                               *string                            `json:"arn"`
	AuthenticationType                *AuthenticationTypeEnum            `json:"authenticationType"`
	LambdaAuthorizerConfig            *LambdaAuthorizerConfig            `json:"lambdaAuthorizerConfig"`
	LogConfig                         *LogConfig                         `json:"logConfig"`
	Name                              *string                            `json:"name"`
	OpenIDConnectConfig               *OpenIDConnectConfig               `json:"openIDConnectConfig"`
	Tags                              map[string]string                  `json:"tags"`
	Uris                              map[string]string                  `json:"uris"`
	UserPoolConfig                    *UserPoolConfig                    `json:"userPoolConfig"`
	WafWebACLArn                      *string                            `json:"wafWebAclArn"`
	XrayEnabled                       *bool                              `json:"xrayEnabled"`
}
