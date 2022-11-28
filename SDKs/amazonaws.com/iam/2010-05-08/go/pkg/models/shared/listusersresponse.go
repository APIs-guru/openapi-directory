package shared

// ListUsersResponse
// Contains the response to a successful <a>ListUsers</a> request.
type ListUsersResponse struct {
	IsTruncated *bool
	Marker      *string
	Users       []User
}
