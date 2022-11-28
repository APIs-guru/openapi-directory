package shared

// SalesforceConnectorProfileCredentials
//
//	The connector-specific profile credentials required when using Salesforce.
type SalesforceConnectorProfileCredentials struct {
	AccessToken          *string                `json:"accessToken,omitempty"`
	ClientCredentialsArn *string                `json:"clientCredentialsArn,omitempty"`
	OAuthRequest         *ConnectorOAuthRequest `json:"oAuthRequest,omitempty"`
	RefreshToken         *string                `json:"refreshToken,omitempty"`
}
