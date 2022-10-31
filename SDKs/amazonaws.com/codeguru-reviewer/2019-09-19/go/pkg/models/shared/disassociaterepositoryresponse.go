package shared



type DisassociateRepositoryResponse struct {
    RepositoryAssociation *RepositoryAssociation `json:"RepositoryAssociation,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

