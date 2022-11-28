package shared

type ImportSnapshotResult struct {
	Description        *string
	ImportTaskID       *string
	SnapshotTaskDetail *SnapshotTaskDetail
	Tags               []Tag
}
