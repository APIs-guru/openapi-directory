package shared

// SecurityGroup
// Describes a security group.
type SecurityGroup struct {
	Description         *string
	GroupID             *string
	GroupName           *string
	IPPermissions       []IPPermission
	IPPermissionsEgress []IPPermission
	OwnerID             *string
	Tags                []Tag
	VpcID               *string
}
