package shared

// BatchAddFacetToObject
// Represents the output of a batch add facet to object operation.
type BatchAddFacetToObject struct {
	ObjectAttributeList []AttributeKeyAndValue `json:"ObjectAttributeList"`
	ObjectReference     ObjectReference        `json:"ObjectReference"`
	SchemaFacet         SchemaFacet            `json:"SchemaFacet"`
}
