package shared

type SalesforceConnectorProfileCredentials struct {
	AccessToken          *string                `json:"accessToken"`
	ClientCredentialsArn *string                `json:"clientCredentialsArn"`
	OAuthRequest         *ConnectorOAuthRequest `json:"oAuthRequest"`
	RefreshToken         *string                `json:"refreshToken"`
}
