package shared

import (
	"time"
)

// Role
// Contains information about an IAM role. This structure is returned as a response element in several API operations that interact with roles.
type Role struct {
	Arn                      string
	AssumeRolePolicyDocument *string
	CreateDate               time.Time
	Description              *string
	MaxSessionDuration       *int64
	Path                     string
	PermissionsBoundary      *AttachedPermissionsBoundary
	RoleID                   string
	RoleLastUsed             *RoleLastUsed
	RoleName                 string
	Tags                     []Tag
}
