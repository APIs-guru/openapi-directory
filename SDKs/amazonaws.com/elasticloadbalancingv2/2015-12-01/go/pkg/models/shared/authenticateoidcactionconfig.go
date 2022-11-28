package shared

// AuthenticateOidcActionConfig
// Request parameters when using an identity provider (IdP) that is compliant with OpenID Connect (OIDC) to authenticate users.
type AuthenticateOidcActionConfig struct {
	AuthenticationRequestExtraParams map[string]string
	AuthorizationEndpoint            string
	ClientID                         string
	ClientSecret                     *string
	Issuer                           string
	OnUnauthenticatedRequest         *AuthenticateOidcActionConditionalBehaviorEnumEnum
	Scope                            *string
	SessionCookieName                *string
	SessionTimeout                   *int64
	TokenEndpoint                    string
	UseExistingClientSecret          *bool
	UserInfoEndpoint                 string
}
