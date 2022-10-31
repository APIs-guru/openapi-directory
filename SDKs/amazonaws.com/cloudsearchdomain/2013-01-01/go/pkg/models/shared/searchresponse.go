package shared

type SearchResponse struct {
	Facets map[string]BucketInfo `json:"facets,omitempty"`
	Hits   *Hits                 `json:"hits,omitempty"`
	Stats  map[string]FieldStats `json:"stats,omitempty"`
	Status *SearchStatus         `json:"status,omitempty"`
}
