package shared

import (
	"time"
)

// GroupDetail
// <p>Contains information about an IAM group, including all of the group's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
type GroupDetail struct {
	Arn                     *string
	AttachedManagedPolicies []AttachedPolicy
	CreateDate              *time.Time
	GroupID                 *string
	GroupName               *string
	GroupPolicyList         []PolicyDetail
	Path                    *string
}
