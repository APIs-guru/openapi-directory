package shared

// ListAttachedGroupPoliciesResponse
// Contains the response to a successful <a>ListAttachedGroupPolicies</a> request.
type ListAttachedGroupPoliciesResponse struct {
	AttachedPolicies []AttachedPolicy
	IsTruncated      *bool
	Marker           *string
}
