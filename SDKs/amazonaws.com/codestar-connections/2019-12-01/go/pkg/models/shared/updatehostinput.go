package shared

type UpdateHostInput struct {
	HostArn          string            `json:"HostArn"`
	ProviderEndpoint *string           `json:"ProviderEndpoint"`
	VpcConfiguration *VpcConfiguration `json:"VpcConfiguration"`
}
