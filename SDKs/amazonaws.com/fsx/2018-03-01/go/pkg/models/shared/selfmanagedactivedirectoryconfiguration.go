package shared

type SelfManagedActiveDirectoryConfiguration struct {
	DNSIps                              []string `json:"DnsIps"`
	DomainName                          string   `json:"DomainName"`
	FileSystemAdministratorsGroup       *string  `json:"FileSystemAdministratorsGroup"`
	OrganizationalUnitDistinguishedName *string  `json:"OrganizationalUnitDistinguishedName"`
	Password                            string   `json:"Password"`
	UserName                            string   `json:"UserName"`
}
