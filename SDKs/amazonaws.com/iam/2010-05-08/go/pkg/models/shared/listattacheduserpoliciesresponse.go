package shared

// ListAttachedUserPoliciesResponse
// Contains the response to a successful <a>ListAttachedUserPolicies</a> request.
type ListAttachedUserPoliciesResponse struct {
	AttachedPolicies []AttachedPolicy
	IsTruncated      *bool
	Marker           *string
}
