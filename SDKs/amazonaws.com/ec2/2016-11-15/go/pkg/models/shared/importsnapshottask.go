package shared

// ImportSnapshotTask
// Describes an import snapshot task.
type ImportSnapshotTask struct {
	Description        *string
	ImportTaskID       *string
	SnapshotTaskDetail *SnapshotTaskDetail
	Tags               []Tag
}
