package shared

// PrivateIP
// Contains information about a private IP address associated with a network interface. This data type is used as a response element in the <a>DescribeFindings</a> action.
type PrivateIP struct {
	PrivateDNSName   *string `json:"privateDnsName,omitempty"`
	PrivateIPAddress *string `json:"privateIpAddress,omitempty"`
}
