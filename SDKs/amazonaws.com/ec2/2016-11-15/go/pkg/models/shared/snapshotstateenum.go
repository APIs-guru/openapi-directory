package shared

type SnapshotStateEnum string

const (
	SnapshotStateEnumPending   SnapshotStateEnum = "pending"
	SnapshotStateEnumCompleted SnapshotStateEnum = "completed"
	SnapshotStateEnumError     SnapshotStateEnum = "error"
)
