package shared

// ConditionalForwarder
// Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.
type ConditionalForwarder struct {
	DNSIPAddrs       []string              `json:"DnsIpAddrs,omitempty"`
	RemoteDomainName *string               `json:"RemoteDomainName,omitempty"`
	ReplicationScope *ReplicationScopeEnum `json:"ReplicationScope,omitempty"`
}
