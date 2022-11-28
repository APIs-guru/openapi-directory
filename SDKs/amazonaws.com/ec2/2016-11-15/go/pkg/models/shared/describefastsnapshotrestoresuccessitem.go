package shared

import (
	"time"
)

// DescribeFastSnapshotRestoreSuccessItem
// Describes fast snapshot restores for a snapshot.
type DescribeFastSnapshotRestoreSuccessItem struct {
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
