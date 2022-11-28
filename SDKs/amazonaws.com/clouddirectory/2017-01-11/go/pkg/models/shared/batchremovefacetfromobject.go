package shared

// BatchRemoveFacetFromObject
// A batch operation to remove a facet from an object.
type BatchRemoveFacetFromObject struct {
	ObjectReference ObjectReference `json:"ObjectReference"`
	SchemaFacet     SchemaFacet     `json:"SchemaFacet"`
}
