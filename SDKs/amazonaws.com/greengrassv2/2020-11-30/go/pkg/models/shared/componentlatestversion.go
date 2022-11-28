package shared

import (
	"time"
)

// ComponentLatestVersion
// Contains information about the latest version of a component.
type ComponentLatestVersion struct {
	Arn               *string             `json:"arn,omitempty"`
	ComponentVersion  *string             `json:"componentVersion,omitempty"`
	CreationTimestamp *time.Time          `json:"creationTimestamp,omitempty"`
	Description       *string             `json:"description,omitempty"`
	Platforms         []ComponentPlatform `json:"platforms,omitempty"`
	Publisher         *string             `json:"publisher,omitempty"`
}
