package shared

// Oidc
// An object representing the <a href="https://openid.net/connect/">OpenID Connect</a> (OIDC) identity provider information for the cluster.
type Oidc struct {
	Issuer *string `json:"issuer,omitempty"`
}
