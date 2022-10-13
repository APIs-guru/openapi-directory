package shared

type DomainJoinInfo struct {
	DirectoryName                       *string `json:"DirectoryName"`
	OrganizationalUnitDistinguishedName *string `json:"OrganizationalUnitDistinguishedName"`
}
