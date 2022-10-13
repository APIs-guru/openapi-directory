package shared

import (
	"time"
)

type ComponentLatestVersion struct {
	Arn               *string             `json:"arn"`
	ComponentVersion  *string             `json:"componentVersion"`
	CreationTimestamp *time.Time          `json:"creationTimestamp"`
	Description       *string             `json:"description"`
	Platforms         []ComponentPlatform `json:"platforms"`
	Publisher         *string             `json:"publisher"`
}
