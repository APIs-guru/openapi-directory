package shared

type UpdateRoleAliasResponse struct {
	RoleAlias    *string `json:"roleAlias,omitempty"`
	RoleAliasArn *string `json:"roleAliasArn,omitempty"`
}
