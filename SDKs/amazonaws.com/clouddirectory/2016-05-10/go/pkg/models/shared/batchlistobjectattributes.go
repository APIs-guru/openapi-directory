package shared

type BatchListObjectAttributes struct {
	FacetFilter     *SchemaFacet    `json:"FacetFilter"`
	MaxResults      *int64          `json:"MaxResults"`
	NextToken       *string         `json:"NextToken"`
	ObjectReference ObjectReference `json:"ObjectReference"`
}
