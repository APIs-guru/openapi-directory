package shared

// BatchListObjectAttributes
// Represents the output of a <a>ListObjectAttributes</a> operation.
type BatchListObjectAttributes struct {
	FacetFilter     *SchemaFacet    `json:"FacetFilter,omitempty"`
	MaxResults      *int64          `json:"MaxResults,omitempty"`
	NextToken       *string         `json:"NextToken,omitempty"`
	ObjectReference ObjectReference `json:"ObjectReference"`
}
