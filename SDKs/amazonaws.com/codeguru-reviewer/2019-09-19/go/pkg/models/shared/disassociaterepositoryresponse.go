package shared

type DisassociateRepositoryResponse struct {
	RepositoryAssociation *RepositoryAssociation `json:"RepositoryAssociation"`
	Tags                  map[string]string      `json:"Tags"`
}
