package shared

// ListRolePoliciesResponse
// Contains the response to a successful <a>ListRolePolicies</a> request.
type ListRolePoliciesResponse struct {
	IsTruncated *bool
	Marker      *string
	PolicyNames []string
}
