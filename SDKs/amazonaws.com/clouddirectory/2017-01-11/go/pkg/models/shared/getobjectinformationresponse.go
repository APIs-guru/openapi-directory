package shared



type GetObjectInformationResponse struct {
    ObjectIdentifier *string `json:"ObjectIdentifier,omitempty"`
    SchemaFacets []SchemaFacet `json:"SchemaFacets,omitempty"`
    
}

