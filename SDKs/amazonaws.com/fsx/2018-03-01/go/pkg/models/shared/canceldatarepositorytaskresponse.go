package shared

type CancelDataRepositoryTaskResponse struct {
	Lifecycle *DataRepositoryTaskLifecycleEnum `json:"Lifecycle,omitempty"`
	TaskID    *string                          `json:"TaskId,omitempty"`
}
