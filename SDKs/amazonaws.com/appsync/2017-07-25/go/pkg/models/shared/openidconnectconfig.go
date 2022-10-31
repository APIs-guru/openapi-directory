package shared

type OpenIDConnectConfig struct {
	AuthTTL  *int64  `json:"authTTL,omitempty"`
	ClientID *string `json:"clientId,omitempty"`
	IatTTL   *int64  `json:"iatTTL,omitempty"`
	Issuer   string  `json:"issuer"`
}
