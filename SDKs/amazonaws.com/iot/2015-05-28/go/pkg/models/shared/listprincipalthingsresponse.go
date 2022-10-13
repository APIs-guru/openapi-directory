package shared

type ListPrincipalThingsResponse struct {
	NextToken *string  `json:"nextToken"`
	Things    []string `json:"things"`
}
