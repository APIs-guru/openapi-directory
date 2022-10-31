package shared



type SelfManagedActiveDirectoryConfigurationUpdates struct {
    DNSIps []string `json:"DnsIps,omitempty"`
    Password *string `json:"Password,omitempty"`
    UserName *string `json:"UserName,omitempty"`
    
}

