package shared

type DirectoryVpcSettingsDescription struct {
	AvailabilityZones []string `json:"AvailabilityZones"`
	SecurityGroupID   *string  `json:"SecurityGroupId"`
	SubnetIds         []string `json:"SubnetIds"`
	VpcID             *string  `json:"VpcId"`
}
