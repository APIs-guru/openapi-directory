package shared

// ConnectorOAuthRequest
//
//	Used by select connectors for which the OAuth workflow is supported, such as Salesforce, Google Analytics, Marketo, Zendesk, and Slack.
type ConnectorOAuthRequest struct {
	AuthCode    *string `json:"authCode,omitempty"`
	RedirectURI *string `json:"redirectUri,omitempty"`
}
