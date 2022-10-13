package shared

type WebhookAuthConfiguration struct {
	AllowedIPRange *string `json:"AllowedIPRange"`
	SecretToken    *string `json:"SecretToken"`
}
