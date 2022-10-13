package shared

type UpdateJobExecutionResponse struct {
	ExecutionState *JobExecutionState `json:"executionState"`
	JobDocument    *string            `json:"jobDocument"`
}
