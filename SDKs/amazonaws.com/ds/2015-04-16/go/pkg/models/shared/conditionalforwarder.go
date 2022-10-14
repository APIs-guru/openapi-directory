package shared

type ConditionalForwarder struct {
	DNSIPAddrs       []string              `json:"DnsIpAddrs,omitempty"`
	RemoteDomainName *string               `json:"RemoteDomainName,omitempty"`
	ReplicationScope *ReplicationScopeEnum `json:"ReplicationScope,omitempty"`
}
