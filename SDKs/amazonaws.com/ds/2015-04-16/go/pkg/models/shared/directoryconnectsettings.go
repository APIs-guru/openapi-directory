package shared

// DirectoryConnectSettings
// Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.
type DirectoryConnectSettings struct {
	CustomerDNSIps   []string `json:"CustomerDnsIps"`
	CustomerUserName string   `json:"CustomerUserName"`
	SubnetIds        []string `json:"SubnetIds"`
	VpcID            string   `json:"VpcId"`
}
