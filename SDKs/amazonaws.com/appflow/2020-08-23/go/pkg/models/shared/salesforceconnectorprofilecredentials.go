package shared

type SalesforceConnectorProfileCredentials struct {
	AccessToken          *string                `json:"accessToken,omitempty"`
	ClientCredentialsArn *string                `json:"clientCredentialsArn,omitempty"`
	OAuthRequest         *ConnectorOAuthRequest `json:"oAuthRequest,omitempty"`
	RefreshToken         *string                `json:"refreshToken,omitempty"`
}
