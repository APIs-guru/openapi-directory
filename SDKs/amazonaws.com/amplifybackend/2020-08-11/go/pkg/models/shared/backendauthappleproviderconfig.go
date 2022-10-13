package shared

type BackendAuthAppleProviderConfig struct {
	ClientID   *string `json:"ClientId"`
	KeyID      *string `json:"KeyId"`
	PrivateKey *string `json:"PrivateKey"`
	TeamID     *string `json:"TeamId"`
}
