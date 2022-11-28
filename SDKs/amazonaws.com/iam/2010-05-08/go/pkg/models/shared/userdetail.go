package shared

import (
	"time"
)

// UserDetail
// <p>Contains information about an IAM user, including all the user's policies and all the IAM groups the user is in.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
type UserDetail struct {
	Arn                     *string
	AttachedManagedPolicies []AttachedPolicy
	CreateDate              *time.Time
	GroupList               []string
	Path                    *string
	PermissionsBoundary     *AttachedPermissionsBoundary
	Tags                    []Tag
	UserID                  *string
	UserName                *string
	UserPolicyList          []PolicyDetail
}
