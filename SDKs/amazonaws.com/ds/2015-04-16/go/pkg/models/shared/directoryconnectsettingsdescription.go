package shared

// DirectoryConnectSettingsDescription
// Contains information about an AD Connector directory.
type DirectoryConnectSettingsDescription struct {
	AvailabilityZones []string `json:"AvailabilityZones,omitempty"`
	ConnectIps        []string `json:"ConnectIps,omitempty"`
	CustomerUserName  *string  `json:"CustomerUserName,omitempty"`
	SecurityGroupID   *string  `json:"SecurityGroupId,omitempty"`
	SubnetIds         []string `json:"SubnetIds,omitempty"`
	VpcID             *string  `json:"VpcId,omitempty"`
}
