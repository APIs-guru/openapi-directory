package shared

import (
	"time"
)

// Build
// <p>Properties describing a custom game build.</p> <p> <b>Related actions</b> </p> <p> <a>CreateBuild</a> | <a>ListBuilds</a> | <a>DescribeBuild</a> | <a>UpdateBuild</a> | <a>DeleteBuild</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
type Build struct {
	BuildArn        *string              `json:"BuildArn,omitempty"`
	BuildID         *string              `json:"BuildId,omitempty"`
	CreationTime    *time.Time           `json:"CreationTime,omitempty"`
	Name            *string              `json:"Name,omitempty"`
	OperatingSystem *OperatingSystemEnum `json:"OperatingSystem,omitempty"`
	SizeOnDisk      *int64               `json:"SizeOnDisk,omitempty"`
	Status          *BuildStatusEnum     `json:"Status,omitempty"`
	Version         *string              `json:"Version,omitempty"`
}
