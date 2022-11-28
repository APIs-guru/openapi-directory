package shared

type ExportTaskStateEnum string

const (
	ExportTaskStateEnumActive     ExportTaskStateEnum = "active"
	ExportTaskStateEnumCancelling ExportTaskStateEnum = "cancelling"
	ExportTaskStateEnumCancelled  ExportTaskStateEnum = "cancelled"
	ExportTaskStateEnumCompleted  ExportTaskStateEnum = "completed"
)
