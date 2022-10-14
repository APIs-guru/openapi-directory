package shared

type ListNamedShadowsForThingResponse struct {
	NextToken *string  `json:"nextToken,omitempty"`
	Results   []string `json:"results,omitempty"`
	Timestamp *int64   `json:"timestamp,omitempty"`
}
