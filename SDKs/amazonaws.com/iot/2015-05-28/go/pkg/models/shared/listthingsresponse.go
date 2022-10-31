package shared

type ListThingsResponse struct {
	NextToken *string          `json:"nextToken,omitempty"`
	Things    []ThingAttribute `json:"things,omitempty"`
}
