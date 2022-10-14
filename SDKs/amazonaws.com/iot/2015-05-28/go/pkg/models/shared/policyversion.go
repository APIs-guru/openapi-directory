package shared

import (
	"time"
)

type PolicyVersion struct {
	CreateDate       *time.Time `json:"createDate,omitempty"`
	IsDefaultVersion *bool      `json:"isDefaultVersion,omitempty"`
	VersionID        *string    `json:"versionId,omitempty"`
}
