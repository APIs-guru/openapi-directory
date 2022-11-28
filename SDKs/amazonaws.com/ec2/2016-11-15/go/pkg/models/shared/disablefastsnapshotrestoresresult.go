package shared

type DisableFastSnapshotRestoresResult struct {
	Successful   []DisableFastSnapshotRestoreSuccessItem
	Unsuccessful []DisableFastSnapshotRestoreErrorItem
}
