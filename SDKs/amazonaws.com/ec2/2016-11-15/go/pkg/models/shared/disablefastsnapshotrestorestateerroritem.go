package shared

// DisableFastSnapshotRestoreStateErrorItem
// Contains information about an error that occurred when disabling fast snapshot restores.
type DisableFastSnapshotRestoreStateErrorItem struct {
	AvailabilityZone *string
	Error            *DisableFastSnapshotRestoreStateError
}
