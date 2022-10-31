package shared

type GetIdentityPoolRolesResponse struct {
	IdentityPoolID *string                `json:"IdentityPoolId,omitempty"`
	RoleMappings   map[string]RoleMapping `json:"RoleMappings,omitempty"`
	Roles          map[string]string      `json:"Roles,omitempty"`
}
