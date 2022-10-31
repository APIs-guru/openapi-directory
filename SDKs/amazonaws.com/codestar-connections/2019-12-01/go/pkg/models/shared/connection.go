package shared

type Connection struct {
	ConnectionArn    *string               `json:"ConnectionArn,omitempty"`
	ConnectionName   *string               `json:"ConnectionName,omitempty"`
	ConnectionStatus *ConnectionStatusEnum `json:"ConnectionStatus,omitempty"`
	HostArn          *string               `json:"HostArn,omitempty"`
	OwnerAccountID   *string               `json:"OwnerAccountId,omitempty"`
	ProviderType     *ProviderTypeEnum     `json:"ProviderType,omitempty"`
}
