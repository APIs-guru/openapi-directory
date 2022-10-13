package shared

type Connection struct {
	ConnectionArn    *string               `json:"ConnectionArn"`
	ConnectionName   *string               `json:"ConnectionName"`
	ConnectionStatus *ConnectionStatusEnum `json:"ConnectionStatus"`
	HostArn          *string               `json:"HostArn"`
	OwnerAccountID   *string               `json:"OwnerAccountId"`
	ProviderType     *ProviderTypeEnum     `json:"ProviderType"`
}
