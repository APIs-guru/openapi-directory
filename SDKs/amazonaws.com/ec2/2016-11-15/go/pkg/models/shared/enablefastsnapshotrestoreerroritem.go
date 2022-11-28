package shared

// EnableFastSnapshotRestoreErrorItem
// Contains information about the errors that occurred when enabling fast snapshot restores.
type EnableFastSnapshotRestoreErrorItem struct {
	FastSnapshotRestoreStateErrors []EnableFastSnapshotRestoreStateErrorItem
	SnapshotID                     *string
}
