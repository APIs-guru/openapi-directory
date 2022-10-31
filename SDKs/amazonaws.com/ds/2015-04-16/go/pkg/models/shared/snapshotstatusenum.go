package shared

type SnapshotStatusEnum string

const (
	SnapshotStatusEnumCreating  SnapshotStatusEnum = "Creating"
	SnapshotStatusEnumCompleted SnapshotStatusEnum = "Completed"
	SnapshotStatusEnumFailed    SnapshotStatusEnum = "Failed"
)
