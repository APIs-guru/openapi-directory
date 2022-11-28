package shared

// WebhookFilterRule
// The event criteria that specify when a webhook notification is sent to your URL.
type WebhookFilterRule struct {
	JSONPath    string  `json:"jsonPath"`
	MatchEquals *string `json:"matchEquals,omitempty"`
}
