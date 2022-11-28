package shared

type CancelImportTaskResult struct {
	ImportTaskID  *string
	PreviousState *string
	State         *string
}
