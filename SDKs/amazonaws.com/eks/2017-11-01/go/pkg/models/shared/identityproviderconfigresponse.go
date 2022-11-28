package shared

// IdentityProviderConfigResponse
// The full description of your identity configuration.
type IdentityProviderConfigResponse struct {
	Oidc *OidcIdentityProviderConfig `json:"oidc,omitempty"`
}
