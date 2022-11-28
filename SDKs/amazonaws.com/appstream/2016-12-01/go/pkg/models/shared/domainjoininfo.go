package shared

// DomainJoinInfo
// Describes the configuration information required to join fleets and image builders to Microsoft Active Directory domains.
type DomainJoinInfo struct {
	DirectoryName                       *string `json:"DirectoryName,omitempty"`
	OrganizationalUnitDistinguishedName *string `json:"OrganizationalUnitDistinguishedName,omitempty"`
}
