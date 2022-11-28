package shared

import (
	"time"
)

// DisableFastSnapshotRestoreSuccessItem
// Describes fast snapshot restores that were successfully disabled.
type DisableFastSnapshotRestoreSuccessItem struct {
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
