package shared

// SalesforceMetadata
//
//	The connector metadata specific to Salesforce.
type SalesforceMetadata struct {
	OAuthScopes []string `json:"oAuthScopes,omitempty"`
}
