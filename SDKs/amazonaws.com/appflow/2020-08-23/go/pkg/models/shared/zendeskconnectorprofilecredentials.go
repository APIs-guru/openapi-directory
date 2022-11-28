package shared

// ZendeskConnectorProfileCredentials
//
//	The connector-specific profile credentials required when using Zendesk.
type ZendeskConnectorProfileCredentials struct {
	AccessToken  *string                `json:"accessToken,omitempty"`
	ClientID     string                 `json:"clientId"`
	ClientSecret string                 `json:"clientSecret"`
	OAuthRequest *ConnectorOAuthRequest `json:"oAuthRequest,omitempty"`
}
