package shared



type TaskExecutionListEntry struct {
    Status *TaskExecutionStatusEnum `json:"Status,omitempty"`
    TaskExecutionArn *string `json:"TaskExecutionArn,omitempty"`
    
}

