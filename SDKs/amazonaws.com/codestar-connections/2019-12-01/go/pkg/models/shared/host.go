package shared

// Host
// <p>A resource that represents the infrastructure where a third-party provider is installed. The host is used when you create connections to an installed third-party provider type, such as GitHub Enterprise Server. You create one host for all connections to that provider.</p> <note> <p>A host created through the CLI or the SDK is in `PENDING` status by default. You can make its status `AVAILABLE` by setting up the host in the console.</p> </note>
type Host struct {
	HostArn          *string           `json:"HostArn,omitempty"`
	Name             *string           `json:"Name,omitempty"`
	ProviderEndpoint *string           `json:"ProviderEndpoint,omitempty"`
	ProviderType     *ProviderTypeEnum `json:"ProviderType,omitempty"`
	Status           *string           `json:"Status,omitempty"`
	StatusMessage    *string           `json:"StatusMessage,omitempty"`
	VpcConfiguration *VpcConfiguration `json:"VpcConfiguration,omitempty"`
}
