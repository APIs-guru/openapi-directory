package shared

// ListPrincipalPoliciesResponse
// The output from the ListPrincipalPolicies operation.
type ListPrincipalPoliciesResponse struct {
	NextMarker *string  `json:"nextMarker,omitempty"`
	Policies   []Policy `json:"policies,omitempty"`
}
