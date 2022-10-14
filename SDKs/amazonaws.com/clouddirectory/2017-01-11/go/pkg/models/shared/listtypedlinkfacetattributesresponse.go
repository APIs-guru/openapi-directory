package shared

type ListTypedLinkFacetAttributesResponse struct {
	Attributes []TypedLinkAttributeDefinition `json:"Attributes,omitempty"`
	NextToken  *string                        `json:"NextToken,omitempty"`
}
