package shared

// ListGroupsResponse
// Contains the response to a successful <a>ListGroups</a> request.
type ListGroupsResponse struct {
	Groups      []Group
	IsTruncated *bool
	Marker      *string
}
