package shared

// SlackMetadata
//
//	The connector metadata specific to Slack.
type SlackMetadata struct {
	OAuthScopes []string `json:"oAuthScopes,omitempty"`
}
