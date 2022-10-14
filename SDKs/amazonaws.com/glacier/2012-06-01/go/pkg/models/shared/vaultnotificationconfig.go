package shared

type VaultNotificationConfig struct {
	Events   []string `json:"Events,omitempty"`
	SnsTopic *string  `json:"SNSTopic,omitempty"`
}
