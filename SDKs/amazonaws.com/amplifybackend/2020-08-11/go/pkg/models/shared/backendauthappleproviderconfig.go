package shared

type BackendAuthAppleProviderConfig struct {
	ClientID   *string `json:"ClientId,omitempty"`
	KeyID      *string `json:"KeyId,omitempty"`
	PrivateKey *string `json:"PrivateKey,omitempty"`
	TeamID     *string `json:"TeamId,omitempty"`
}
