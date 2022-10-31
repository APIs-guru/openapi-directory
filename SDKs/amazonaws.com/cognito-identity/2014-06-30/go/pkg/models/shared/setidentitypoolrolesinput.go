package shared

type SetIdentityPoolRolesInput struct {
	IdentityPoolID string                 `json:"IdentityPoolId"`
	RoleMappings   map[string]RoleMapping `json:"RoleMappings,omitempty"`
	Roles          map[string]string      `json:"Roles"`
}
