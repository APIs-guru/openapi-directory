package shared

// WebhookAuthConfiguration
// The authentication applied to incoming webhook trigger requests.
type WebhookAuthConfiguration struct {
	AllowedIPRange *string `json:"AllowedIPRange,omitempty"`
	SecretToken    *string `json:"SecretToken,omitempty"`
}
