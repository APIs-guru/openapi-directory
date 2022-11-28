package shared

// DNSServiceDiscovery
// An object that represents the DNS service discovery information for your virtual node.
type DNSServiceDiscovery struct {
	Hostname     string               `json:"hostname"`
	ResponseType *DNSResponseTypeEnum `json:"responseType,omitempty"`
}
