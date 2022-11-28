package shared

// CreateConditionalForwarderRequest
// Initiates the creation of a conditional forwarder for your Directory Service for Microsoft Active Directory. Conditional forwarders are required in order to set up a trust relationship with another domain.
type CreateConditionalForwarderRequest struct {
	DirectoryID      string   `json:"DirectoryId"`
	DNSIPAddrs       []string `json:"DnsIpAddrs"`
	RemoteDomainName string   `json:"RemoteDomainName"`
}
