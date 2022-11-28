package shared

// CreateBackendAuthOAuthConfig
// Creates the OAuth configuration for your Amplify project.
type CreateBackendAuthOAuthConfig struct {
	DomainPrefix           *string                  `json:"DomainPrefix,omitempty"`
	OAuthGrantType         OAuthGrantTypeEnum       `json:"OAuthGrantType"`
	OAuthScopes            []OAuthScopesElementEnum `json:"OAuthScopes"`
	RedirectSignInUrIs     []string                 `json:"RedirectSignInURIs"`
	RedirectSignOutUrIs    []string                 `json:"RedirectSignOutURIs"`
	SocialProviderSettings *SocialProviderSettings  `json:"SocialProviderSettings,omitempty"`
}
