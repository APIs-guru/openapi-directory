package shared

// GoogleAnalyticsMetadata
//
//	The connector metadata specific to Google Analytics.
type GoogleAnalyticsMetadata struct {
	OAuthScopes []string `json:"oAuthScopes,omitempty"`
}
