package shared

import (
	"time"
)

type ComponentLatestVersion struct {
	Arn               *string             `json:"arn,omitempty"`
	ComponentVersion  *string             `json:"componentVersion,omitempty"`
	CreationTimestamp *time.Time          `json:"creationTimestamp,omitempty"`
	Description       *string             `json:"description,omitempty"`
	Platforms         []ComponentPlatform `json:"platforms,omitempty"`
	Publisher         *string             `json:"publisher,omitempty"`
}
