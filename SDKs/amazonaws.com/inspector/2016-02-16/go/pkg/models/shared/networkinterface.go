package shared

type NetworkInterface struct {
	Ipv6Addresses      []string        `json:"ipv6Addresses"`
	NetworkInterfaceID *string         `json:"networkInterfaceId"`
	PrivateDNSName     *string         `json:"privateDnsName"`
	PrivateIPAddress   *string         `json:"privateIpAddress"`
	PrivateIPAddresses []PrivateIP     `json:"privateIpAddresses"`
	PublicDNSName      *string         `json:"publicDnsName"`
	PublicIP           *string         `json:"publicIp"`
	SecurityGroups     []SecurityGroup `json:"securityGroups"`
	SubnetID           *string         `json:"subnetId"`
	VpcID              *string         `json:"vpcId"`
}
