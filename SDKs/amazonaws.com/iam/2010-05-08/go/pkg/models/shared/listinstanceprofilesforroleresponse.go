package shared

// ListInstanceProfilesForRoleResponse
// Contains the response to a successful <a>ListInstanceProfilesForRole</a> request.
type ListInstanceProfilesForRoleResponse struct {
	InstanceProfiles []InstanceProfile
	IsTruncated      *bool
	Marker           *string
}
