package shared

// ListUserPoliciesResponse
// Contains the response to a successful <a>ListUserPolicies</a> request.
type ListUserPoliciesResponse struct {
	IsTruncated *bool
	Marker      *string
	PolicyNames []string
}
