package shared



type FileSystemEndpoint struct {
    DNSName *string `json:"DNSName,omitempty"`
    IPAddresses []string `json:"IpAddresses,omitempty"`
    
}

