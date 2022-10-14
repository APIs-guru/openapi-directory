package shared

type CreateConnectionRequest struct {
	ConnectionName string           `json:"ConnectionName"`
	ProviderType   ProviderTypeEnum `json:"ProviderType"`
	Tags           []Tag            `json:"Tags,omitempty"`
}
