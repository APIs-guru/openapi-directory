package shared

type Host struct {
	HostArn          *string           `json:"HostArn"`
	Name             *string           `json:"Name"`
	ProviderEndpoint *string           `json:"ProviderEndpoint"`
	ProviderType     *ProviderTypeEnum `json:"ProviderType"`
	Status           *string           `json:"Status"`
	StatusMessage    *string           `json:"StatusMessage"`
	VpcConfiguration *VpcConfiguration `json:"VpcConfiguration"`
}
