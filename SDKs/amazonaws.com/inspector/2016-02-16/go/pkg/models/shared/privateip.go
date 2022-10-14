package shared

type PrivateIP struct {
	PrivateDNSName   *string `json:"privateDnsName,omitempty"`
	PrivateIPAddress *string `json:"privateIpAddress,omitempty"`
}
