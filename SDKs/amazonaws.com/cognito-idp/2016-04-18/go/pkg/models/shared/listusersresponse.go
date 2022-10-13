package shared

type ListUsersResponse struct {
	PaginationToken *string    `json:"PaginationToken"`
	Users           []UserType `json:"Users"`
}
