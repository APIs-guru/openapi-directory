package shared

import (
	"time"
)

// BundleTask
// Describes a bundle task.
type BundleTask struct {
	BundleID        *string
	BundleTaskError *BundleTaskError
	InstanceID      *string
	Progress        *string
	StartTime       *time.Time
	State           *BundleTaskStateEnum
	Storage         *Storage
	UpdateTime      *time.Time
}
