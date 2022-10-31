package shared

type ListUsersRequest struct {
	AttributesToGet []string `json:"AttributesToGet,omitempty"`
	Filter          *string  `json:"Filter,omitempty"`
	Limit           *int64   `json:"Limit,omitempty"`
	PaginationToken *string  `json:"PaginationToken,omitempty"`
	UserPoolID      string   `json:"UserPoolId"`
}
