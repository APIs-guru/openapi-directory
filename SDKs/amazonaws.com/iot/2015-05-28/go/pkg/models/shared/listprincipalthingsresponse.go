package shared

// ListPrincipalThingsResponse
// The output from the ListPrincipalThings operation.
type ListPrincipalThingsResponse struct {
	NextToken *string  `json:"nextToken,omitempty"`
	Things    []string `json:"things,omitempty"`
}
