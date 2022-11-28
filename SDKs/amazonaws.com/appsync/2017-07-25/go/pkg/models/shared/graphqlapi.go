package shared

// GraphqlAPI
// Describes a GraphQL API.
type GraphqlAPI struct {
	AdditionalAuthenticationProviders []AdditionalAuthenticationProvider `json:"additionalAuthenticationProviders,omitempty"`
	APIID                             *string                            `json:"apiId,omitempty"`
	Arn                               *string                            `json:"arn,omitempty"`
	AuthenticationType                *AuthenticationTypeEnum            `json:"authenticationType,omitempty"`
	LambdaAuthorizerConfig            *LambdaAuthorizerConfig            `json:"lambdaAuthorizerConfig,omitempty"`
	LogConfig                         *LogConfig                         `json:"logConfig,omitempty"`
	Name                              *string                            `json:"name,omitempty"`
	OpenIDConnectConfig               *OpenIDConnectConfig               `json:"openIDConnectConfig,omitempty"`
	Tags                              map[string]string                  `json:"tags,omitempty"`
	Uris                              map[string]string                  `json:"uris,omitempty"`
	UserPoolConfig                    *UserPoolConfig                    `json:"userPoolConfig,omitempty"`
	WafWebACLArn                      *string                            `json:"wafWebAclArn,omitempty"`
	XrayEnabled                       *bool                              `json:"xrayEnabled,omitempty"`
}
