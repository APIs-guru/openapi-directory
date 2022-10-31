package shared

type SelfManagedActiveDirectoryConfiguration struct {
	DNSIps                              []string `json:"DnsIps"`
	DomainName                          string   `json:"DomainName"`
	FileSystemAdministratorsGroup       *string  `json:"FileSystemAdministratorsGroup,omitempty"`
	OrganizationalUnitDistinguishedName *string  `json:"OrganizationalUnitDistinguishedName,omitempty"`
	Password                            string   `json:"Password"`
	UserName                            string   `json:"UserName"`
}
