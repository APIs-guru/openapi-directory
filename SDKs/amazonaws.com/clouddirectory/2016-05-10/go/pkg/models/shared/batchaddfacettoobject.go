package shared

type BatchAddFacetToObject struct {
	ObjectAttributeList []AttributeKeyAndValue `json:"ObjectAttributeList"`
	ObjectReference     ObjectReference        `json:"ObjectReference"`
	SchemaFacet         SchemaFacet            `json:"SchemaFacet"`
}
