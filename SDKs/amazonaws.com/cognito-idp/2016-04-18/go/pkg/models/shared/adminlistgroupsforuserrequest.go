package shared

type AdminListGroupsForUserRequest struct {
	Limit      *int64  `json:"Limit,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	UserPoolID string  `json:"UserPoolId"`
	Username   string  `json:"Username"`
}
