package shared

type CreateGroupRequest struct {
	Description *string `json:"Description,omitempty"`
	GroupName   string  `json:"GroupName"`
	Precedence  *int64  `json:"Precedence,omitempty"`
	RoleArn     *string `json:"RoleArn,omitempty"`
	UserPoolID  string  `json:"UserPoolId"`
}
