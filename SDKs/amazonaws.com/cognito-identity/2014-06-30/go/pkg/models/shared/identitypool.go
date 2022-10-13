package shared

type IdentityPool struct {
	AllowClassicFlow               *bool                     `json:"AllowClassicFlow"`
	AllowUnauthenticatedIdentities bool                      `json:"AllowUnauthenticatedIdentities"`
	CognitoIdentityProviders       []CognitoIdentityProvider `json:"CognitoIdentityProviders"`
	DeveloperProviderName          *string                   `json:"DeveloperProviderName"`
	IdentityPoolID                 string                    `json:"IdentityPoolId"`
	IdentityPoolName               string                    `json:"IdentityPoolName"`
	IdentityPoolTags               map[string]string         `json:"IdentityPoolTags"`
	OpenIDConnectProviderArNs      []string                  `json:"OpenIdConnectProviderARNs"`
	SamlProviderArNs               []string                  `json:"SamlProviderARNs"`
	SupportedLoginProviders        map[string]string         `json:"SupportedLoginProviders"`
}
