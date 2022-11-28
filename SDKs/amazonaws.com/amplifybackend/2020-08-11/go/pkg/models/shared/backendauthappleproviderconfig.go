package shared

// BackendAuthAppleProviderConfig
// Describes Apple social federation configurations for allowing your app users to sign in using OAuth.
type BackendAuthAppleProviderConfig struct {
	ClientID   *string `json:"ClientId,omitempty"`
	KeyID      *string `json:"KeyId,omitempty"`
	PrivateKey *string `json:"PrivateKey,omitempty"`
	TeamID     *string `json:"TeamId,omitempty"`
}
