package shared

type CreateHostInput struct {
	Name             string            `json:"Name"`
	ProviderEndpoint string            `json:"ProviderEndpoint"`
	ProviderType     ProviderTypeEnum  `json:"ProviderType"`
	Tags             []Tag             `json:"Tags"`
	VpcConfiguration *VpcConfiguration `json:"VpcConfiguration"`
}
