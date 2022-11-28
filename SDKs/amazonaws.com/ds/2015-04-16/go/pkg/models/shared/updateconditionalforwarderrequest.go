package shared

// UpdateConditionalForwarderRequest
// Updates a conditional forwarder.
type UpdateConditionalForwarderRequest struct {
	DirectoryID      string   `json:"DirectoryId"`
	DNSIPAddrs       []string `json:"DnsIpAddrs"`
	RemoteDomainName string   `json:"RemoteDomainName"`
}
