package shared

// ListGroupsForUserResponse
// Contains the response to a successful <a>ListGroupsForUser</a> request.
type ListGroupsForUserResponse struct {
	Groups      []Group
	IsTruncated *bool
	Marker      *string
}
