package shared

type UpdateGroupRequest struct {
	Description *string `json:"Description"`
	GroupName   string  `json:"GroupName"`
	Precedence  *int64  `json:"Precedence"`
	RoleArn     *string `json:"RoleArn"`
	UserPoolID  string  `json:"UserPoolId"`
}
