package shared

type ListUsersInGroupResponse struct {
	NextToken *string    `json:"NextToken,omitempty"`
	Users     []UserType `json:"Users,omitempty"`
}
