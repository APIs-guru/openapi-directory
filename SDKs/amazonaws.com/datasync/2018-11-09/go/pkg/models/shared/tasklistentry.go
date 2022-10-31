package shared

type TaskListEntry struct {
	Name    *string         `json:"Name,omitempty"`
	Status  *TaskStatusEnum `json:"Status,omitempty"`
	TaskArn *string         `json:"TaskArn,omitempty"`
}
