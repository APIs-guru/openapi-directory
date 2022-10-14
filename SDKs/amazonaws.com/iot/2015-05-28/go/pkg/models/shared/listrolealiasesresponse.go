package shared

type ListRoleAliasesResponse struct {
	NextMarker  *string  `json:"nextMarker,omitempty"`
	RoleAliases []string `json:"roleAliases,omitempty"`
}
