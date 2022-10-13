package shared

type CancelDataRepositoryTaskResponse struct {
	Lifecycle *DataRepositoryTaskLifecycleEnum `json:"Lifecycle"`
	TaskID    *string                          `json:"TaskId"`
}
