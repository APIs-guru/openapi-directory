package shared



type BatchGetObjectInformationResponse struct {
    ObjectIdentifier *string `json:"ObjectIdentifier,omitempty"`
    SchemaFacets []SchemaFacet `json:"SchemaFacets,omitempty"`
    
}

