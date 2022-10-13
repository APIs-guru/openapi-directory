package shared

type DescribeRepositoryAssociationResponse struct {
	RepositoryAssociation *RepositoryAssociation `json:"RepositoryAssociation"`
	Tags                  map[string]string      `json:"Tags"`
}
