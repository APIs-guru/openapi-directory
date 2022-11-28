package shared

type RevokeSecurityGroupIngressResult struct {
	Return               *bool
	UnknownIPPermissions []IPPermission
}
