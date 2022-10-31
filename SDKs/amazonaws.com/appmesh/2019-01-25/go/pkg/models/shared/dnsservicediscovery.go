package shared



type DNSServiceDiscovery struct {
    Hostname string `json:"hostname"`
    ResponseType *DNSResponseTypeEnum `json:"responseType,omitempty"`
    
}

