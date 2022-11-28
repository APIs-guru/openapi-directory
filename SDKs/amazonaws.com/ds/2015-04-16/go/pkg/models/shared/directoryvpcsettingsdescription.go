package shared

// DirectoryVpcSettingsDescription
// Contains information about the directory.
type DirectoryVpcSettingsDescription struct {
	AvailabilityZones []string `json:"AvailabilityZones,omitempty"`
	SecurityGroupID   *string  `json:"SecurityGroupId,omitempty"`
	SubnetIds         []string `json:"SubnetIds,omitempty"`
	VpcID             *string  `json:"VpcId,omitempty"`
}
