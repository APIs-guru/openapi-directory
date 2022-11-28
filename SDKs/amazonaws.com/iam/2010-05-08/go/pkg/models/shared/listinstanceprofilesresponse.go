package shared

// ListInstanceProfilesResponse
// Contains the response to a successful <a>ListInstanceProfiles</a> request.
type ListInstanceProfilesResponse struct {
	InstanceProfiles []InstanceProfile
	IsTruncated      *bool
	Marker           *string
}
