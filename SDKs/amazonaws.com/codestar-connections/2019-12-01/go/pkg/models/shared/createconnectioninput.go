package shared

type CreateConnectionInput struct {
	ConnectionName string            `json:"ConnectionName"`
	HostArn        *string           `json:"HostArn"`
	ProviderType   *ProviderTypeEnum `json:"ProviderType"`
	Tags           []Tag             `json:"Tags"`
}
