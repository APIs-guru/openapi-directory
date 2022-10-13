package shared

import (
	"time"
)

type PolicyVersion struct {
	CreateDate       *time.Time `json:"createDate"`
	IsDefaultVersion *bool      `json:"isDefaultVersion"`
	VersionID        *string    `json:"versionId"`
}
