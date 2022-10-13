package shared

type TaskListEntry struct {
	Name    *string         `json:"Name"`
	Status  *TaskStatusEnum `json:"Status"`
	TaskArn *string         `json:"TaskArn"`
}
