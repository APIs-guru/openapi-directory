package shared

type WebhookFilterRule struct {
	JSONPath    string  `json:"jsonPath"`
	MatchEquals *string `json:"matchEquals"`
}
