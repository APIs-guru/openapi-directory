package shared

type RevokeSecurityGroupEgressResult struct {
	Return               *bool
	UnknownIPPermissions []IPPermission
}
