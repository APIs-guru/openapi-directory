package shared

// CreateIdentityPoolInput
// Input to the CreateIdentityPool action.
type CreateIdentityPoolInput struct {
	AllowClassicFlow               *bool                     `json:"AllowClassicFlow,omitempty"`
	AllowUnauthenticatedIdentities bool                      `json:"AllowUnauthenticatedIdentities"`
	CognitoIdentityProviders       []CognitoIdentityProvider `json:"CognitoIdentityProviders,omitempty"`
	DeveloperProviderName          *string                   `json:"DeveloperProviderName,omitempty"`
	IdentityPoolName               string                    `json:"IdentityPoolName"`
	IdentityPoolTags               map[string]string         `json:"IdentityPoolTags,omitempty"`
	OpenIDConnectProviderArNs      []string                  `json:"OpenIdConnectProviderARNs,omitempty"`
	SamlProviderArNs               []string                  `json:"SamlProviderARNs,omitempty"`
	SupportedLoginProviders        map[string]string         `json:"SupportedLoginProviders,omitempty"`
}
