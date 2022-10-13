package shared

import (
	"time"
)

type Build struct {
	BuildArn        *string              `json:"BuildArn"`
	BuildID         *string              `json:"BuildId"`
	CreationTime    *time.Time           `json:"CreationTime"`
	Name            *string              `json:"Name"`
	OperatingSystem *OperatingSystemEnum `json:"OperatingSystem"`
	SizeOnDisk      *int64               `json:"SizeOnDisk"`
	Status          *BuildStatusEnum     `json:"Status"`
	Version         *string              `json:"Version"`
}
