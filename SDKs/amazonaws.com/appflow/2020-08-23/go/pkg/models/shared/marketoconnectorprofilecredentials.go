package shared

type MarketoConnectorProfileCredentials struct {
	AccessToken  *string                `json:"accessToken"`
	ClientID     string                 `json:"clientId"`
	ClientSecret string                 `json:"clientSecret"`
	OAuthRequest *ConnectorOAuthRequest `json:"oAuthRequest"`
}
