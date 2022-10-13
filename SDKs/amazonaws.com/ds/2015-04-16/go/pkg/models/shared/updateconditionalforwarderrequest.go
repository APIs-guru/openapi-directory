package shared

type UpdateConditionalForwarderRequest struct {
	DirectoryID      string   `json:"DirectoryId"`
	DNSIPAddrs       []string `json:"DnsIpAddrs"`
	RemoteDomainName string   `json:"RemoteDomainName"`
}
