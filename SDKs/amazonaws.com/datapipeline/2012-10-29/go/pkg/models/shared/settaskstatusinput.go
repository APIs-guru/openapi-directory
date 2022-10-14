package shared

type SetTaskStatusInput struct {
	ErrorID         *string        `json:"errorId,omitempty"`
	ErrorMessage    *string        `json:"errorMessage,omitempty"`
	ErrorStackTrace *string        `json:"errorStackTrace,omitempty"`
	TaskID          string         `json:"taskId"`
	TaskStatus      TaskStatusEnum `json:"taskStatus"`
}
