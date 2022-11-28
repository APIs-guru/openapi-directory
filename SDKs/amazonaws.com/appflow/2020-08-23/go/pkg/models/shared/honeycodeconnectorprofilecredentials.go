package shared

// HoneycodeConnectorProfileCredentials
//
//	The connector-specific credentials required when using Amazon Honeycode.
type HoneycodeConnectorProfileCredentials struct {
	AccessToken  *string                `json:"accessToken,omitempty"`
	OAuthRequest *ConnectorOAuthRequest `json:"oAuthRequest,omitempty"`
	RefreshToken *string                `json:"refreshToken,omitempty"`
}
