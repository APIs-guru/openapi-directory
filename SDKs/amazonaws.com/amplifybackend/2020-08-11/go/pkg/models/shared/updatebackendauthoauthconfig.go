package shared

// UpdateBackendAuthOAuthConfig
// The OAuth configurations for authenticating users into your Amplify app.
type UpdateBackendAuthOAuthConfig struct {
	DomainPrefix           *string                  `json:"DomainPrefix,omitempty"`
	OAuthGrantType         *OAuthGrantTypeEnum      `json:"OAuthGrantType,omitempty"`
	OAuthScopes            []OAuthScopesElementEnum `json:"OAuthScopes,omitempty"`
	RedirectSignInUrIs     []string                 `json:"RedirectSignInURIs,omitempty"`
	RedirectSignOutUrIs    []string                 `json:"RedirectSignOutURIs,omitempty"`
	SocialProviderSettings *SocialProviderSettings  `json:"SocialProviderSettings,omitempty"`
}
