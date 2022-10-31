package shared

type CreateConnectionInput struct {
	ConnectionName string            `json:"ConnectionName"`
	HostArn        *string           `json:"HostArn,omitempty"`
	ProviderType   *ProviderTypeEnum `json:"ProviderType,omitempty"`
	Tags           []Tag             `json:"Tags,omitempty"`
}
