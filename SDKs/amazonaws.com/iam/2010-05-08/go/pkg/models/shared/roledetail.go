package shared

import (
	"time"
)

// RoleDetail
// <p>Contains information about an IAM role, including all of the role's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
type RoleDetail struct {
	Arn                      *string
	AssumeRolePolicyDocument *string
	AttachedManagedPolicies  []AttachedPolicy
	CreateDate               *time.Time
	InstanceProfileList      []InstanceProfile
	Path                     *string
	PermissionsBoundary      *AttachedPermissionsBoundary
	RoleID                   *string
	RoleLastUsed             *RoleLastUsed
	RoleName                 *string
	RolePolicyList           []PolicyDetail
	Tags                     []Tag
}
