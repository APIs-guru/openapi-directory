package shared

// TaskExecutionListEntry
// Represents a single entry in a list of task executions. <code>TaskExecutionListEntry</code> returns an array that contains a list of specific invocations of a task when the <a href="https://docs.aws.amazon.com/datasync/latest/userguide/API_ListTaskExecutions.html">ListTaskExecutions</a> operation is called.
type TaskExecutionListEntry struct {
	Status           *TaskExecutionStatusEnum `json:"Status,omitempty"`
	TaskExecutionArn *string                  `json:"TaskExecutionArn,omitempty"`
}
