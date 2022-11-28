package shared

import (
	"time"
)

// PolicyVersion
// Describes a policy version.
type PolicyVersion struct {
	CreateDate       *time.Time `json:"createDate,omitempty"`
	IsDefaultVersion *bool      `json:"isDefaultVersion,omitempty"`
	VersionID        *string    `json:"versionId,omitempty"`
}
