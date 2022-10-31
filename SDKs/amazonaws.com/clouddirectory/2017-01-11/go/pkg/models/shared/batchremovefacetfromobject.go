package shared



type BatchRemoveFacetFromObject struct {
    ObjectReference ObjectReference `json:"ObjectReference"`
    SchemaFacet SchemaFacet `json:"SchemaFacet"`
    
}

