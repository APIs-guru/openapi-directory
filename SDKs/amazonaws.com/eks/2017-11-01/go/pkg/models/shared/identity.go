package shared

// Identity
// An object representing an identity provider.
type Identity struct {
	Oidc *Oidc `json:"oidc,omitempty"`
}
