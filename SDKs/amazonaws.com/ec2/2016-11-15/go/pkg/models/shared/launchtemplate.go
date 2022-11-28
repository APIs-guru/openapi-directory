package shared

import (
	"time"
)

// LaunchTemplate
// Describes a launch template.
type LaunchTemplate struct {
	CreateTime           *time.Time
	CreatedBy            *string
	DefaultVersionNumber *int64
	LatestVersionNumber  *int64
	LaunchTemplateID     *string
	LaunchTemplateName   *string
	Tags                 []Tag
}
