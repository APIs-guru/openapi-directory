package shared

// OidcIdentityProviderConfig
// An object that represents the configuration for an OpenID Connect (OIDC) identity provider.
type OidcIdentityProviderConfig struct {
	ClientID                   *string           `json:"clientId,omitempty"`
	ClusterName                *string           `json:"clusterName,omitempty"`
	GroupsClaim                *string           `json:"groupsClaim,omitempty"`
	GroupsPrefix               *string           `json:"groupsPrefix,omitempty"`
	IdentityProviderConfigArn  *string           `json:"identityProviderConfigArn,omitempty"`
	IdentityProviderConfigName *string           `json:"identityProviderConfigName,omitempty"`
	IssuerURL                  *string           `json:"issuerUrl,omitempty"`
	RequiredClaims             map[string]string `json:"requiredClaims,omitempty"`
	Status                     *ConfigStatusEnum `json:"status,omitempty"`
	Tags                       map[string]string `json:"tags,omitempty"`
	UsernameClaim              *string           `json:"usernameClaim,omitempty"`
	UsernamePrefix             *string           `json:"usernamePrefix,omitempty"`
}
