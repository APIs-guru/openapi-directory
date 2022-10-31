package shared



type Identity struct {
    Group *GroupIdentity `json:"group,omitempty"`
    IamRole *IamRoleIdentity `json:"iamRole,omitempty"`
    IamUser *IamUserIdentity `json:"iamUser,omitempty"`
    User *UserIdentity `json:"user,omitempty"`
    
}

