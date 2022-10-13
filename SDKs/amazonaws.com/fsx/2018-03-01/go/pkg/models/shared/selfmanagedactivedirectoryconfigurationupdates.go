package shared

type SelfManagedActiveDirectoryConfigurationUpdates struct {
	DNSIps   []string `json:"DnsIps"`
	Password *string  `json:"Password"`
	UserName *string  `json:"UserName"`
}
