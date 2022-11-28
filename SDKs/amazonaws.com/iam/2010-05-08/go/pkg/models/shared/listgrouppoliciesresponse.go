package shared

// ListGroupPoliciesResponse
// Contains the response to a successful <a>ListGroupPolicies</a> request.
type ListGroupPoliciesResponse struct {
	IsTruncated *bool
	Marker      *string
	PolicyNames []string
}
