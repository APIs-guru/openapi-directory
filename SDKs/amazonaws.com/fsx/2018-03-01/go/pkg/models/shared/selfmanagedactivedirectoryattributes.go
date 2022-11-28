package shared

// SelfManagedActiveDirectoryAttributes
// The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.
type SelfManagedActiveDirectoryAttributes struct {
	DNSIps                              []string `json:"DnsIps,omitempty"`
	DomainName                          *string  `json:"DomainName,omitempty"`
	FileSystemAdministratorsGroup       *string  `json:"FileSystemAdministratorsGroup,omitempty"`
	OrganizationalUnitDistinguishedName *string  `json:"OrganizationalUnitDistinguishedName,omitempty"`
	UserName                            *string  `json:"UserName,omitempty"`
}
