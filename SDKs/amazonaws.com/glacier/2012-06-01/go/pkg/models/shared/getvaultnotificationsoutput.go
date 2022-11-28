package shared

// GetVaultNotificationsOutput
// Contains the Amazon S3 Glacier response to your request.
type GetVaultNotificationsOutput struct {
	VaultNotificationConfig *VaultNotificationConfig `json:"vaultNotificationConfig,omitempty"`
}
