package shared

import (
	"time"
)

// EnableFastSnapshotRestoreSuccessItem
// Describes fast snapshot restores that were successfully enabled.
type EnableFastSnapshotRestoreSuccessItem struct {
	AvailabilityZone      *string
	DisabledTime          *time.Time
	DisablingTime         *time.Time
	EnabledTime           *time.Time
	EnablingTime          *time.Time
	OptimizingTime        *time.Time
	OwnerAlias            *string
	OwnerID               *string
	SnapshotID            *string
	State                 *FastSnapshotRestoreStateCodeEnum
	StateTransitionReason *string
}
