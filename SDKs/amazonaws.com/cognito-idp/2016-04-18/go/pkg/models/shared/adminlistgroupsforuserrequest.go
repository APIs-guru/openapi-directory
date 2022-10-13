package shared

type AdminListGroupsForUserRequest struct {
	Limit      *int64  `json:"Limit"`
	NextToken  *string `json:"NextToken"`
	UserPoolID string  `json:"UserPoolId"`
	Username   string  `json:"Username"`
}
