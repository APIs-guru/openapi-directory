package shared

// ListThingPrincipalsResponse
// The output from the ListThingPrincipals operation.
type ListThingPrincipalsResponse struct {
	NextToken  *string  `json:"nextToken,omitempty"`
	Principals []string `json:"principals,omitempty"`
}
