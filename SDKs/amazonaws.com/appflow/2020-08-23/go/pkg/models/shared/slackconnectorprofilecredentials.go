package shared

// SlackConnectorProfileCredentials
//
//	The connector-specific profile credentials required when using Slack.
type SlackConnectorProfileCredentials struct {
	AccessToken  *string                `json:"accessToken,omitempty"`
	ClientID     string                 `json:"clientId"`
	ClientSecret string                 `json:"clientSecret"`
	OAuthRequest *ConnectorOAuthRequest `json:"oAuthRequest,omitempty"`
}
