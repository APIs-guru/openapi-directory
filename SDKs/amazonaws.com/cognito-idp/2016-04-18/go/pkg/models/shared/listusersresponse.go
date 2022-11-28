package shared

// ListUsersResponse
// The response from the request to list users.
type ListUsersResponse struct {
	PaginationToken *string    `json:"PaginationToken,omitempty"`
	Users           []UserType `json:"Users,omitempty"`
}
