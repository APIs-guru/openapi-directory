package shared

type DomainJoinInfo struct {
	DirectoryName                       *string `json:"DirectoryName,omitempty"`
	OrganizationalUnitDistinguishedName *string `json:"OrganizationalUnitDistinguishedName,omitempty"`
}
