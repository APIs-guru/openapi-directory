package shared

type GetGroupRequest struct {
	GroupName  string `json:"GroupName"`
	UserPoolID string `json:"UserPoolId"`
}
