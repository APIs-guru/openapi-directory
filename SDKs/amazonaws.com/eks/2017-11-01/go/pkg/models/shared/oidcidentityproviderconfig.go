package shared

type OidcIdentityProviderConfig struct {
	ClientID                   *string           `json:"clientId"`
	ClusterName                *string           `json:"clusterName"`
	GroupsClaim                *string           `json:"groupsClaim"`
	GroupsPrefix               *string           `json:"groupsPrefix"`
	IdentityProviderConfigArn  *string           `json:"identityProviderConfigArn"`
	IdentityProviderConfigName *string           `json:"identityProviderConfigName"`
	IssuerURL                  *string           `json:"issuerUrl"`
	RequiredClaims             map[string]string `json:"requiredClaims"`
	Status                     *ConfigStatusEnum `json:"status"`
	Tags                       map[string]string `json:"tags"`
	UsernameClaim              *string           `json:"usernameClaim"`
	UsernamePrefix             *string           `json:"usernamePrefix"`
}
