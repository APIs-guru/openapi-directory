package shared



type SocialProviderSettings struct {
    Facebook *BackendAuthSocialProviderConfig `json:"Facebook,omitempty"`
    Google *BackendAuthSocialProviderConfig `json:"Google,omitempty"`
    LoginWithAmazon *BackendAuthSocialProviderConfig `json:"LoginWithAmazon,omitempty"`
    SignInWithApple *BackendAuthAppleProviderConfig `json:"SignInWithApple,omitempty"`
    
}

