package shared

type AssociateRepositoryResponse struct {
	RepositoryAssociation *RepositoryAssociation `json:"RepositoryAssociation"`
	Tags                  map[string]string      `json:"Tags"`
}
