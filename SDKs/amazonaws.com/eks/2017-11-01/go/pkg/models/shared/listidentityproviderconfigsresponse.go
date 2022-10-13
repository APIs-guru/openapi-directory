package shared

type ListIdentityProviderConfigsResponse struct {
	IdentityProviderConfigs []IdentityProviderConfig `json:"identityProviderConfigs"`
	NextToken               *string                  `json:"nextToken"`
}
