package shared

type ListRepositoryAssociationsResponse struct {
	NextToken                      *string                        `json:"NextToken"`
	RepositoryAssociationSummaries []RepositoryAssociationSummary `json:"RepositoryAssociationSummaries"`
}
