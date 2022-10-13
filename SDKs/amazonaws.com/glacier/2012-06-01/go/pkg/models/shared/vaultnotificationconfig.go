package shared

type VaultNotificationConfig struct {
	Events   []string `json:"Events"`
	SnsTopic *string  `json:"SNSTopic"`
}
