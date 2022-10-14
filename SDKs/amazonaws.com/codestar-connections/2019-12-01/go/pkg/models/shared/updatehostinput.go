package shared

type UpdateHostInput struct {
	HostArn          string            `json:"HostArn"`
	ProviderEndpoint *string           `json:"ProviderEndpoint,omitempty"`
	VpcConfiguration *VpcConfiguration `json:"VpcConfiguration,omitempty"`
}
