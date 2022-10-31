package shared

type StartNextPendingJobExecutionResponse struct {
	Execution *JobExecution `json:"execution,omitempty"`
}
