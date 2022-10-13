package shared

type IdentityProviderConfigResponse struct {
	Oidc *OidcIdentityProviderConfig `json:"oidc"`
}
