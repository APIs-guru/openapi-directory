package shared

// ListPolicyPrincipalsResponse
// The output from the ListPolicyPrincipals operation.
type ListPolicyPrincipalsResponse struct {
	NextMarker *string  `json:"nextMarker,omitempty"`
	Principals []string `json:"principals,omitempty"`
}
