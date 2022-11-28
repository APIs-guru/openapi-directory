package shared

// EnableFastSnapshotRestoreStateErrorItem
// Contains information about an error that occurred when enabling fast snapshot restores.
type EnableFastSnapshotRestoreStateErrorItem struct {
	AvailabilityZone *string
	Error            *EnableFastSnapshotRestoreStateError
}
