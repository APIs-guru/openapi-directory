package shared

// ListPoliciesResponse
// The output from the ListPolicies operation.
type ListPoliciesResponse struct {
	NextMarker *string  `json:"nextMarker,omitempty"`
	Policies   []Policy `json:"policies,omitempty"`
}
