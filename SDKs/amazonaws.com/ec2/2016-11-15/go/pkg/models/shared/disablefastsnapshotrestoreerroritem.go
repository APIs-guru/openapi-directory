package shared

// DisableFastSnapshotRestoreErrorItem
// Contains information about the errors that occurred when disabling fast snapshot restores.
type DisableFastSnapshotRestoreErrorItem struct {
	FastSnapshotRestoreStateErrors []DisableFastSnapshotRestoreStateErrorItem
	SnapshotID                     *string
}
