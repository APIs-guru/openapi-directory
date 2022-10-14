package shared

type UpdateDirectoryConfigRequest struct {
	DirectoryName                        string                     `json:"DirectoryName"`
	OrganizationalUnitDistinguishedNames []string                   `json:"OrganizationalUnitDistinguishedNames,omitempty"`
	ServiceAccountCredentials            *ServiceAccountCredentials `json:"ServiceAccountCredentials,omitempty"`
}
