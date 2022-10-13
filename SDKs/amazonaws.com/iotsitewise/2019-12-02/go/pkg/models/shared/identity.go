package shared

type Identity struct {
	Group   *GroupIdentity   `json:"group"`
	IamRole *IamRoleIdentity `json:"iamRole"`
	IamUser *IamUserIdentity `json:"iamUser"`
	User    *UserIdentity    `json:"user"`
}
