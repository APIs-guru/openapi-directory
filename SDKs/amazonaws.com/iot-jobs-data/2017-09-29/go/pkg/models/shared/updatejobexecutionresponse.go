package shared



type UpdateJobExecutionResponse struct {
    ExecutionState *JobExecutionState `json:"executionState,omitempty"`
    JobDocument *string `json:"jobDocument,omitempty"`
    
}

