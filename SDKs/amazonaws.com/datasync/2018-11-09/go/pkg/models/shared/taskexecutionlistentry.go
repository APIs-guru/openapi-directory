package shared

type TaskExecutionListEntry struct {
	Status           *TaskExecutionStatusEnum `json:"Status"`
	TaskExecutionArn *string                  `json:"TaskExecutionArn"`
}
