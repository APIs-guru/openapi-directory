package shared

type ListThingsResponse struct {
	NextToken *string          `json:"nextToken"`
	Things    []ThingAttribute `json:"things"`
}
