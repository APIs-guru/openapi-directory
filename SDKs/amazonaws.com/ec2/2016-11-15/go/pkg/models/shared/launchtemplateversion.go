package shared

import (
	"time"
)

// LaunchTemplateVersion
// Describes a launch template version.
type LaunchTemplateVersion struct {
	CreateTime         *time.Time
	CreatedBy          *string
	DefaultVersion     *bool
	LaunchTemplateData *ResponseLaunchTemplateData
	LaunchTemplateID   *string
	LaunchTemplateName *string
	VersionDescription *string
	VersionNumber      *int64
}
