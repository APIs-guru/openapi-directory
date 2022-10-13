package shared

type GetDiscoveredResourceCountsRequest struct {
	Limit         *int64   `json:"limit"`
	NextToken     *string  `json:"nextToken"`
	ResourceTypes []string `json:"resourceTypes"`
}
