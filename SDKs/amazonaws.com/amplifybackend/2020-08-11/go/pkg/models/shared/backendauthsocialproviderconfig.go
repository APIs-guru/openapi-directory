package shared

// BackendAuthSocialProviderConfig
// Describes third-party social federation configurations for allowing your app users to sign in using OAuth.
type BackendAuthSocialProviderConfig struct {
	ClientID     *string `json:"ClientId,omitempty"`
	ClientSecret *string `json:"ClientSecret,omitempty"`
}
