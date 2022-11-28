package shared

type DescribeFastSnapshotRestoresResult struct {
	FastSnapshotRestores []DescribeFastSnapshotRestoreSuccessItem
	NextToken            *string
}
