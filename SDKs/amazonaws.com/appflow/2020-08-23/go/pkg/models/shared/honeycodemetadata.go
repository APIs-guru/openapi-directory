package shared

// HoneycodeMetadata
//
//	The connector metadata specific to Amazon Honeycode.
type HoneycodeMetadata struct {
	OAuthScopes []string `json:"oAuthScopes,omitempty"`
}
