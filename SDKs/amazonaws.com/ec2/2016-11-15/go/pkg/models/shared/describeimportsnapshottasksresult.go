package shared

type DescribeImportSnapshotTasksResult struct {
	ImportSnapshotTasks []ImportSnapshotTask
	NextToken           *string
}
