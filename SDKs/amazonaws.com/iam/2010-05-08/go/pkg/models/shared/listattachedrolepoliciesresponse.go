package shared

// ListAttachedRolePoliciesResponse
// Contains the response to a successful <a>ListAttachedRolePolicies</a> request.
type ListAttachedRolePoliciesResponse struct {
	AttachedPolicies []AttachedPolicy
	IsTruncated      *bool
	Marker           *string
}
