package shared

type PrincipalPermissions struct {
	Permissions []PermissionEnum   `json:"Permissions,omitempty"`
	Principal   *DataLakePrincipal `json:"Principal,omitempty"`
}
