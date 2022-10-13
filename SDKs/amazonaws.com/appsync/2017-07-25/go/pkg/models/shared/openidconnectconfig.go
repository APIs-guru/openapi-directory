package shared

type OpenIDConnectConfig struct {
	AuthTTL  *int64  `json:"authTTL"`
	ClientID *string `json:"clientId"`
	IatTTL   *int64  `json:"iatTTL"`
	Issuer   string  `json:"issuer"`
}
