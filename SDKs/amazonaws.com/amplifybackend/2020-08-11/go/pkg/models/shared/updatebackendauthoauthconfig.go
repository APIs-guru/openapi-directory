package shared

type UpdateBackendAuthOAuthConfig struct {
	DomainPrefix           *string                  `json:"DomainPrefix"`
	OAuthGrantType         *OAuthGrantTypeEnum      `json:"OAuthGrantType"`
	OAuthScopes            []OAuthScopesElementEnum `json:"OAuthScopes"`
	RedirectSignInUrIs     []string                 `json:"RedirectSignInURIs"`
	RedirectSignOutUrIs    []string                 `json:"RedirectSignOutURIs"`
	SocialProviderSettings *SocialProviderSettings  `json:"SocialProviderSettings"`
}
