package shared

type EnableFastSnapshotRestoresResult struct {
	Successful   []EnableFastSnapshotRestoreSuccessItem
	Unsuccessful []EnableFastSnapshotRestoreErrorItem
}
