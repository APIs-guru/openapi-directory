package shared

type PrincipalPermissions struct {
	Permissions []PermissionEnum   `json:"Permissions"`
	Principal   *DataLakePrincipal `json:"Principal"`
}
