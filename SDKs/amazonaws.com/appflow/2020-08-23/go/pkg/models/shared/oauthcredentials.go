package shared

// OAuthCredentials
//
//	The OAuth credentials required for OAuth type authentication.
type OAuthCredentials struct {
	AccessToken  *string                `json:"accessToken,omitempty"`
	ClientID     string                 `json:"clientId"`
	ClientSecret string                 `json:"clientSecret"`
	OAuthRequest *ConnectorOAuthRequest `json:"oAuthRequest,omitempty"`
	RefreshToken *string                `json:"refreshToken,omitempty"`
}
