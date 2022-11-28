package shared

// Role
//
//	The wrapper that contains the Audit Manager role information of the current user, such as the role type and IAM Amazon Resource Name (ARN).
type Role struct {
	RoleArn  *string       `json:"roleArn,omitempty"`
	RoleType *RoleTypeEnum `json:"roleType,omitempty"`
}
