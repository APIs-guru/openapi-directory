package shared

// StaleSecurityGroup
// Describes a stale security group (a security group that contains stale rules).
type StaleSecurityGroup struct {
	Description              *string
	GroupID                  *string
	GroupName                *string
	StaleIPPermissions       []StaleIPPermission
	StaleIPPermissionsEgress []StaleIPPermission
	VpcID                    *string
}
