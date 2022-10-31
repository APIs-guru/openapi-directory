package shared



type ListDomainAssociationsResult struct {
    DomainAssociations []DomainAssociation `json:"domainAssociations"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

