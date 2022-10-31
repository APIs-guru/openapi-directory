package shared

type ReportTaskProgressInput struct {
	Fields []Field `json:"fields,omitempty"`
	TaskID string  `json:"taskId"`
}
