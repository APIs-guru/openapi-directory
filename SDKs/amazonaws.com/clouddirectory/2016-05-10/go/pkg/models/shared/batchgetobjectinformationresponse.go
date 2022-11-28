package shared

// BatchGetObjectInformationResponse
// Represents the output of a <a>GetObjectInformation</a> response operation.
type BatchGetObjectInformationResponse struct {
	ObjectIdentifier *string       `json:"ObjectIdentifier,omitempty"`
	SchemaFacets     []SchemaFacet `json:"SchemaFacets,omitempty"`
}
