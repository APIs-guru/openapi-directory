package shared

import (
	"time"
)

// ApplicationInfo
// Information about an application.
type ApplicationInfo struct {
	ApplicationID     *string              `json:"applicationId,omitempty"`
	ApplicationName   *string              `json:"applicationName,omitempty"`
	ComputePlatform   *ComputePlatformEnum `json:"computePlatform,omitempty"`
	CreateTime        *time.Time           `json:"createTime,omitempty"`
	GitHubAccountName *string              `json:"gitHubAccountName,omitempty"`
	LinkedToGitHub    *bool                `json:"linkedToGitHub,omitempty"`
}
