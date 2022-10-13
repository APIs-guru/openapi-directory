package shared

type ListTypedLinkFacetAttributesResponse struct {
	Attributes []TypedLinkAttributeDefinition `json:"Attributes"`
	NextToken  *string                        `json:"NextToken"`
}
