package shared

type GetHostOutput struct {
	Name             *string           `json:"Name"`
	ProviderEndpoint *string           `json:"ProviderEndpoint"`
	ProviderType     *ProviderTypeEnum `json:"ProviderType"`
	Status           *string           `json:"Status"`
	VpcConfiguration *VpcConfiguration `json:"VpcConfiguration"`
}
