package shared

// ListThingsResponse
// The output from the ListThings operation.
type ListThingsResponse struct {
	NextToken *string          `json:"nextToken,omitempty"`
	Things    []ThingAttribute `json:"things,omitempty"`
}
