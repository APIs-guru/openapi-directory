package shared

// GetGroupResponse
// Contains the response to a successful <a>GetGroup</a> request.
type GetGroupResponse struct {
	Group       Group
	IsTruncated *bool
	Marker      *string
	Users       []User
}
