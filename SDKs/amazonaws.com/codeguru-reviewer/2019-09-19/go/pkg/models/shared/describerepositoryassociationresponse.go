package shared



type DescribeRepositoryAssociationResponse struct {
    RepositoryAssociation *RepositoryAssociation `json:"RepositoryAssociation,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

