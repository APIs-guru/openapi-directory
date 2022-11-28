package shared

// WebhookDefinition
// Represents information about a webhook and its definition.
type WebhookDefinition struct {
	Authentication              WebhookAuthenticationTypeEnum `json:"authentication"`
	AuthenticationConfiguration WebhookAuthConfiguration      `json:"authenticationConfiguration"`
	Filters                     []WebhookFilterRule           `json:"filters"`
	Name                        string                        `json:"name"`
	TargetAction                string                        `json:"targetAction"`
	TargetPipeline              string                        `json:"targetPipeline"`
}
