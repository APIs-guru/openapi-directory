package shared

import (
	"time"
)

// ManagedPolicyDetail
// <p>Contains information about a managed policy, including the policy's ARN, versions, and the number of principal entities (users, groups, and roles) that the policy is attached to.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p> <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
type ManagedPolicyDetail struct {
	Arn                           *string
	AttachmentCount               *int64
	CreateDate                    *time.Time
	DefaultVersionID              *string
	Description                   *string
	IsAttachable                  *bool
	Path                          *string
	PermissionsBoundaryUsageCount *int64
	PolicyID                      *string
	PolicyName                    *string
	PolicyVersionList             []PolicyVersion
	UpdateDate                    *time.Time
}
