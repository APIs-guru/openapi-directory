package shared

// CreateComputerRequest
// Contains the inputs for the <a>CreateComputer</a> operation.
type CreateComputerRequest struct {
	ComputerAttributes                  []Attribute `json:"ComputerAttributes,omitempty"`
	ComputerName                        string      `json:"ComputerName"`
	DirectoryID                         string      `json:"DirectoryId"`
	OrganizationalUnitDistinguishedName *string     `json:"OrganizationalUnitDistinguishedName,omitempty"`
	Password                            string      `json:"Password"`
}
