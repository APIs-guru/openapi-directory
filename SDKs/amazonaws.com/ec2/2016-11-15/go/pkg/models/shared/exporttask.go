package shared

// ExportTask
// Describes an export instance task.
type ExportTask struct {
	Description           *string
	ExportTaskID          *string
	ExportToS3Task        *ExportToS3Task
	InstanceExportDetails *InstanceExportDetails
	State                 *ExportTaskStateEnum
	StatusMessage         *string
	Tags                  []Tag
}
