package shared

type DescribeExportImageTasksResult struct {
	ExportImageTasks []ExportImageTask
	NextToken        *string
}
