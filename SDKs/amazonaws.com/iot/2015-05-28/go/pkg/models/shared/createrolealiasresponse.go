package shared

type CreateRoleAliasResponse struct {
	RoleAlias    *string `json:"roleAlias,omitempty"`
	RoleAliasArn *string `json:"roleAliasArn,omitempty"`
}
