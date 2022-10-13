package shared

type DirectoryConnectSettingsDescription struct {
	AvailabilityZones []string `json:"AvailabilityZones"`
	ConnectIps        []string `json:"ConnectIps"`
	CustomerUserName  *string  `json:"CustomerUserName"`
	SecurityGroupID   *string  `json:"SecurityGroupId"`
	SubnetIds         []string `json:"SubnetIds"`
	VpcID             *string  `json:"VpcId"`
}
