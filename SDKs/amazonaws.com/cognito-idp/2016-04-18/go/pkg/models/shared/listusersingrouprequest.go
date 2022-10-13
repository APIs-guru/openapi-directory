package shared

type ListUsersInGroupRequest struct {
	GroupName  string  `json:"GroupName"`
	Limit      *int64  `json:"Limit"`
	NextToken  *string `json:"NextToken"`
	UserPoolID string  `json:"UserPoolId"`
}
