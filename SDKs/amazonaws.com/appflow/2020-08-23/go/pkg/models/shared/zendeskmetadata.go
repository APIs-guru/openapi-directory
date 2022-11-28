package shared

// ZendeskMetadata
//
//	The connector metadata specific to Zendesk.
type ZendeskMetadata struct {
	OAuthScopes []string `json:"oAuthScopes,omitempty"`
}
