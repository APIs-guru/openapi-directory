package shared

type SearchResponse struct {
	Facets map[string]BucketInfo `json:"facets"`
	Hits   *Hits                 `json:"hits"`
	Stats  map[string]FieldStats `json:"stats"`
	Status *SearchStatus         `json:"status"`
}
