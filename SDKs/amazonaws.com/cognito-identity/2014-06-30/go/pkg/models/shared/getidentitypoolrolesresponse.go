package shared

type GetIdentityPoolRolesResponse struct {
	IdentityPoolID *string                `json:"IdentityPoolId"`
	RoleMappings   map[string]RoleMapping `json:"RoleMappings"`
	Roles          map[string]string      `json:"Roles"`
}
