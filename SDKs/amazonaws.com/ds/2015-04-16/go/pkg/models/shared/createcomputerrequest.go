package shared

type CreateComputerRequest struct {
	ComputerAttributes                  []Attribute `json:"ComputerAttributes,omitempty"`
	ComputerName                        string      `json:"ComputerName"`
	DirectoryID                         string      `json:"DirectoryId"`
	OrganizationalUnitDistinguishedName *string     `json:"OrganizationalUnitDistinguishedName,omitempty"`
	Password                            string      `json:"Password"`
}
