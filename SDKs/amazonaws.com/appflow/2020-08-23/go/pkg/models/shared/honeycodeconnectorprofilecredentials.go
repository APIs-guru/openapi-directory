package shared

type HoneycodeConnectorProfileCredentials struct {
	AccessToken  *string                `json:"accessToken"`
	OAuthRequest *ConnectorOAuthRequest `json:"oAuthRequest"`
	RefreshToken *string                `json:"refreshToken"`
}
