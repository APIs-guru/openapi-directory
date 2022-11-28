package shared

// VaultNotificationConfig
// Represents a vault's notification configuration.
type VaultNotificationConfig struct {
	Events   []string `json:"Events,omitempty"`
	SnsTopic *string  `json:"SNSTopic,omitempty"`
}
