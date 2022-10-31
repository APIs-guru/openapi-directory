package shared



type CreateDirectoryConfigRequest struct {
    DirectoryName string `json:"DirectoryName"`
    OrganizationalUnitDistinguishedNames []string `json:"OrganizationalUnitDistinguishedNames"`
    ServiceAccountCredentials *ServiceAccountCredentials `json:"ServiceAccountCredentials,omitempty"`
    
}

