package shared

// ListDomainAssociationsResult
//
//	The result structure for the list domain association request.
type ListDomainAssociationsResult struct {
	DomainAssociations []DomainAssociation `json:"domainAssociations"`
	NextToken          *string             `json:"nextToken,omitempty"`
}
