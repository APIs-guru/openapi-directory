package shared

type ListNamedShadowsForThingResponse struct {
	NextToken *string  `json:"nextToken"`
	Results   []string `json:"results"`
	Timestamp *int64   `json:"timestamp"`
}
