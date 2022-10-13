package shared

type GetObjectInformationResponse struct {
	ObjectIdentifier *string       `json:"ObjectIdentifier"`
	SchemaFacets     []SchemaFacet `json:"SchemaFacets"`
}
