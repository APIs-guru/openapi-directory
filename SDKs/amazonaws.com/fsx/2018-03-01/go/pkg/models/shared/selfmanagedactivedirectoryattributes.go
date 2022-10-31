package shared



type SelfManagedActiveDirectoryAttributes struct {
    DNSIps []string `json:"DnsIps,omitempty"`
    DomainName *string `json:"DomainName,omitempty"`
    FileSystemAdministratorsGroup *string `json:"FileSystemAdministratorsGroup,omitempty"`
    OrganizationalUnitDistinguishedName *string `json:"OrganizationalUnitDistinguishedName,omitempty"`
    UserName *string `json:"UserName,omitempty"`
    
}

