package shared

type CreateComputerRequest struct {
	ComputerAttributes                  []Attribute `json:"ComputerAttributes"`
	ComputerName                        string      `json:"ComputerName"`
	DirectoryID                         string      `json:"DirectoryId"`
	OrganizationalUnitDistinguishedName *string     `json:"OrganizationalUnitDistinguishedName"`
	Password                            string      `json:"Password"`
}
