package shared

type ListUsersInGroupResponse struct {
	NextToken *string    `json:"NextToken"`
	Users     []UserType `json:"Users"`
}
