package shared



type ListRepositoryAssociationsResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    RepositoryAssociationSummaries []RepositoryAssociationSummary `json:"RepositoryAssociationSummaries,omitempty"`
    
}

