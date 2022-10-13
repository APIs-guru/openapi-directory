package shared

type PrivateIP struct {
	PrivateDNSName   *string `json:"privateDnsName"`
	PrivateIPAddress *string `json:"privateIpAddress"`
}
