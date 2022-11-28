package shared

// SelfManagedActiveDirectoryConfigurationUpdates
// The configuration that Amazon FSx uses to join the Windows File Server instance to a self-managed Microsoft Active Directory (AD) directory.
type SelfManagedActiveDirectoryConfigurationUpdates struct {
	DNSIps   []string `json:"DnsIps,omitempty"`
	Password *string  `json:"Password,omitempty"`
	UserName *string  `json:"UserName,omitempty"`
}
