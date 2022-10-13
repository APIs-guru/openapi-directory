package shared

type SetTaskStatusInput struct {
	ErrorID         *string        `json:"errorId"`
	ErrorMessage    *string        `json:"errorMessage"`
	ErrorStackTrace *string        `json:"errorStackTrace"`
	TaskID          string         `json:"taskId"`
	TaskStatus      TaskStatusEnum `json:"taskStatus"`
}
