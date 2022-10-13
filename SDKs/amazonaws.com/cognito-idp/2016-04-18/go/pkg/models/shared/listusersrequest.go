package shared

type ListUsersRequest struct {
	AttributesToGet []string `json:"AttributesToGet"`
	Filter          *string  `json:"Filter"`
	Limit           *int64   `json:"Limit"`
	PaginationToken *string  `json:"PaginationToken"`
	UserPoolID      string   `json:"UserPoolId"`
}
