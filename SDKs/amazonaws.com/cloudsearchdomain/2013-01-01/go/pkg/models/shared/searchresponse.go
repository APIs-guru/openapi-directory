package shared

// SearchResponse
// The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.
type SearchResponse struct {
	Facets map[string]BucketInfo `json:"facets,omitempty"`
	Hits   *Hits                 `json:"hits,omitempty"`
	Stats  map[string]FieldStats `json:"stats,omitempty"`
	Status *SearchStatus         `json:"status,omitempty"`
}
