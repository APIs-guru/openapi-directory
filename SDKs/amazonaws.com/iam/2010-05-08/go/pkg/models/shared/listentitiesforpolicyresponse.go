package shared

// ListEntitiesForPolicyResponse
// Contains the response to a successful <a>ListEntitiesForPolicy</a> request.
type ListEntitiesForPolicyResponse struct {
	IsTruncated  *bool
	Marker       *string
	PolicyGroups []PolicyGroup
	PolicyRoles  []PolicyRole
	PolicyUsers  []PolicyUser
}
