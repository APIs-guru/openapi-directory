package shared

type WebhookDefinition struct {
	Authentication              WebhookAuthenticationTypeEnum `json:"authentication"`
	AuthenticationConfiguration WebhookAuthConfiguration      `json:"authenticationConfiguration"`
	Filters                     []WebhookFilterRule           `json:"filters"`
	Name                        string                        `json:"name"`
	TargetAction                string                        `json:"targetAction"`
	TargetPipeline              string                        `json:"targetPipeline"`
}
