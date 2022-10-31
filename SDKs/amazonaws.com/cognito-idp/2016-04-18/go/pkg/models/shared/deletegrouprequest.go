package shared

type DeleteGroupRequest struct {
	GroupName  string `json:"GroupName"`
	UserPoolID string `json:"UserPoolId"`
}
