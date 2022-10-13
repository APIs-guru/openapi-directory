package shared

type UpdateDirectoryConfigRequest struct {
	DirectoryName                        string                     `json:"DirectoryName"`
	OrganizationalUnitDistinguishedNames []string                   `json:"OrganizationalUnitDistinguishedNames"`
	ServiceAccountCredentials            *ServiceAccountCredentials `json:"ServiceAccountCredentials"`
}
