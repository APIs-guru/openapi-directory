package shared

// MacSecKey
// Information about the MAC Security (MACsec) secret key.
type MacSecKey struct {
	Ckn       *string `json:"ckn,omitempty"`
	SecretArn *string `json:"secretARN,omitempty"`
	StartOn   *string `json:"startOn,omitempty"`
	State     *string `json:"state,omitempty"`
}
