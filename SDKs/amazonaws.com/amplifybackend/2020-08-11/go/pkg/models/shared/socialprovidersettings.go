package shared

// SocialProviderSettings
// The settings for using the social identity providers for access to your Amplify app.
type SocialProviderSettings struct {
	Facebook        *BackendAuthSocialProviderConfig `json:"Facebook,omitempty"`
	Google          *BackendAuthSocialProviderConfig `json:"Google,omitempty"`
	LoginWithAmazon *BackendAuthSocialProviderConfig `json:"LoginWithAmazon,omitempty"`
	SignInWithApple *BackendAuthAppleProviderConfig  `json:"SignInWithApple,omitempty"`
}
