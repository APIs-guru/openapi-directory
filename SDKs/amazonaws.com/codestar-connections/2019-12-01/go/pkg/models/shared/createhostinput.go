package shared

type CreateHostInput struct {
	Name             string            `json:"Name"`
	ProviderEndpoint string            `json:"ProviderEndpoint"`
	ProviderType     ProviderTypeEnum  `json:"ProviderType"`
	Tags             []Tag             `json:"Tags,omitempty"`
	VpcConfiguration *VpcConfiguration `json:"VpcConfiguration,omitempty"`
}
