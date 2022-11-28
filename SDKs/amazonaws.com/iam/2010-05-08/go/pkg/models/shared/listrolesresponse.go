package shared

// ListRolesResponse
// Contains the response to a successful <a>ListRoles</a> request.
type ListRolesResponse struct {
	IsTruncated *bool
	Marker      *string
	Roles       []Role
}
