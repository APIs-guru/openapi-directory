package shared

type CreateIdentityPoolInput struct {
	AllowClassicFlow               *bool                     `json:"AllowClassicFlow"`
	AllowUnauthenticatedIdentities bool                      `json:"AllowUnauthenticatedIdentities"`
	CognitoIdentityProviders       []CognitoIdentityProvider `json:"CognitoIdentityProviders"`
	DeveloperProviderName          *string                   `json:"DeveloperProviderName"`
	IdentityPoolName               string                    `json:"IdentityPoolName"`
	IdentityPoolTags               map[string]string         `json:"IdentityPoolTags"`
	OpenIDConnectProviderArNs      []string                  `json:"OpenIdConnectProviderARNs"`
	SamlProviderArNs               []string                  `json:"SamlProviderARNs"`
	SupportedLoginProviders        map[string]string         `json:"SupportedLoginProviders"`
}
