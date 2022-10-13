package shared

type SelfManagedActiveDirectoryAttributes struct {
	DNSIps                              []string `json:"DnsIps"`
	DomainName                          *string  `json:"DomainName"`
	FileSystemAdministratorsGroup       *string  `json:"FileSystemAdministratorsGroup"`
	OrganizationalUnitDistinguishedName *string  `json:"OrganizationalUnitDistinguishedName"`
	UserName                            *string  `json:"UserName"`
}
