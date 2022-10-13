package shared

type OAuthCredentials struct {
	AccessToken  *string                `json:"accessToken"`
	ClientID     string                 `json:"clientId"`
	ClientSecret string                 `json:"clientSecret"`
	OAuthRequest *ConnectorOAuthRequest `json:"oAuthRequest"`
	RefreshToken *string                `json:"refreshToken"`
}
