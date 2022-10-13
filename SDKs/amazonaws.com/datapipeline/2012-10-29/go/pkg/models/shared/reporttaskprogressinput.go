package shared

type ReportTaskProgressInput struct {
	Fields []Field `json:"fields"`
	TaskID string  `json:"taskId"`
}
