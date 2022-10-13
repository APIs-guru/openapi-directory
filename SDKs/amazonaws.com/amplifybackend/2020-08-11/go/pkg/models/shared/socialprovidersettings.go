package shared

type SocialProviderSettings struct {
	Facebook        *BackendAuthSocialProviderConfig `json:"Facebook"`
	Google          *BackendAuthSocialProviderConfig `json:"Google"`
	LoginWithAmazon *BackendAuthSocialProviderConfig `json:"LoginWithAmazon"`
	SignInWithApple *BackendAuthAppleProviderConfig  `json:"SignInWithApple"`
}
