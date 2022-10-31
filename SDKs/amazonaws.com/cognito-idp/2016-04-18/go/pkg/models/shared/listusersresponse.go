package shared

type ListUsersResponse struct {
	PaginationToken *string    `json:"PaginationToken,omitempty"`
	Users           []UserType `json:"Users,omitempty"`
}
