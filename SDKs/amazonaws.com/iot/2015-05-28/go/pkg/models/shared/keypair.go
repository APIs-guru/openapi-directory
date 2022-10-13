package shared

type KeyPair struct {
	PrivateKey *string `json:"PrivateKey"`
	PublicKey  *string `json:"PublicKey"`
}
