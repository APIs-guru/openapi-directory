package shared

type ListUsersInGroupRequest struct {
	GroupName  string  `json:"GroupName"`
	Limit      *int64  `json:"Limit,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
	UserPoolID string  `json:"UserPoolId"`
}
