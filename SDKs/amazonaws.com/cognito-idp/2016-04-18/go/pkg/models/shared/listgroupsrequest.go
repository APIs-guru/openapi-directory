package shared

type ListGroupsRequest struct {
	Limit      *int64  `json:"Limit"`
	NextToken  *string `json:"NextToken"`
	UserPoolID string  `json:"UserPoolId"`
}
