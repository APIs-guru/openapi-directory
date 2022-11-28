package shared

// OpenIDConnectConfig
// Describes an OpenID Connect configuration.
type OpenIDConnectConfig struct {
	AuthTTL  *int64  `json:"authTTL,omitempty"`
	ClientID *string `json:"clientId,omitempty"`
	IatTTL   *int64  `json:"iatTTL,omitempty"`
	Issuer   string  `json:"issuer"`
}
