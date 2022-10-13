package shared

type ConditionalForwarder struct {
	DNSIPAddrs       []string              `json:"DnsIpAddrs"`
	RemoteDomainName *string               `json:"RemoteDomainName"`
	ReplicationScope *ReplicationScopeEnum `json:"ReplicationScope"`
}
