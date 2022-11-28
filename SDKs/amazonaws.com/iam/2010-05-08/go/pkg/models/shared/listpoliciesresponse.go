package shared

// ListPoliciesResponse
// Contains the response to a successful <a>ListPolicies</a> request.
type ListPoliciesResponse struct {
	IsTruncated *bool
	Marker      *string
	Policies    []Policy
}
