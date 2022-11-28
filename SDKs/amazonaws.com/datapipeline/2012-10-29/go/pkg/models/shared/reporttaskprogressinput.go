package shared

// ReportTaskProgressInput
// Contains the parameters for ReportTaskProgress.
type ReportTaskProgressInput struct {
	Fields []Field `json:"fields,omitempty"`
	TaskID string  `json:"taskId"`
}
