package shared

type DirectoryConnectSettings struct {
	CustomerDNSIps   []string `json:"CustomerDnsIps"`
	CustomerUserName string   `json:"CustomerUserName"`
	SubnetIds        []string `json:"SubnetIds"`
	VpcID            string   `json:"VpcId"`
}
