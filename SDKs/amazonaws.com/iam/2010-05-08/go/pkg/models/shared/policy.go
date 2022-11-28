package shared

import (
	"time"
)

// Policy
// <p>Contains information about a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicy</a>, <a>GetPolicy</a>, and <a>ListPolicies</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
type Policy struct {
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
	Tags                          []Tag
	UpdateDate                    *time.Time
}
