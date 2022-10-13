package shared

type BatchGetObjectInformationResponse struct {
	ObjectIdentifier *string       `json:"ObjectIdentifier"`
	SchemaFacets     []SchemaFacet `json:"SchemaFacets"`
}
