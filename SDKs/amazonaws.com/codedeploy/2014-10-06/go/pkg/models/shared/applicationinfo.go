package shared

import (
	"time"
)

type ApplicationInfo struct {
	ApplicationID     *string              `json:"applicationId"`
	ApplicationName   *string              `json:"applicationName"`
	ComputePlatform   *ComputePlatformEnum `json:"computePlatform"`
	CreateTime        *time.Time           `json:"createTime"`
	GitHubAccountName *string              `json:"gitHubAccountName"`
	LinkedToGitHub    *bool                `json:"linkedToGitHub"`
}
