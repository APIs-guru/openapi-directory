package shared

// NetworkInterface
// Contains information about the network interfaces interacting with an EC2 instance. This data type is used as one of the elements of the <a>AssetAttributes</a> data type.
type NetworkInterface struct {
	Ipv6Addresses      []string        `json:"ipv6Addresses,omitempty"`
	NetworkInterfaceID *string         `json:"networkInterfaceId,omitempty"`
	PrivateDNSName     *string         `json:"privateDnsName,omitempty"`
	PrivateIPAddress   *string         `json:"privateIpAddress,omitempty"`
	PrivateIPAddresses []PrivateIP     `json:"privateIpAddresses,omitempty"`
	PublicDNSName      *string         `json:"publicDnsName,omitempty"`
	PublicIP           *string         `json:"publicIp,omitempty"`
	SecurityGroups     []SecurityGroup `json:"securityGroups,omitempty"`
	SubnetID           *string         `json:"subnetId,omitempty"`
	VpcID              *string         `json:"vpcId,omitempty"`
}
