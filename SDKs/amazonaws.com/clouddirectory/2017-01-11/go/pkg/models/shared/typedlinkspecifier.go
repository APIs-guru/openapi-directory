package shared

type TypedLinkSpecifier struct {
	IdentityAttributeValues []AttributeNameAndValue     `json:"IdentityAttributeValues"`
	SourceObjectReference   ObjectReference             `json:"SourceObjectReference"`
	TargetObjectReference   ObjectReference             `json:"TargetObjectReference"`
	TypedLinkFacet          TypedLinkSchemaAndFacetName `json:"TypedLinkFacet"`
}
