package shared

type ListRoleAliasesResponse struct {
	NextMarker  *string  `json:"nextMarker"`
	RoleAliases []string `json:"roleAliases"`
}
