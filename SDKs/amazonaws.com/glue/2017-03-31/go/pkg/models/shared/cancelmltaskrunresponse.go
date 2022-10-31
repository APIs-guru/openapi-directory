package shared



type CancelMlTaskRunResponse struct {
    Status *TaskStatusTypeEnum `json:"Status,omitempty"`
    TaskRunID *string `json:"TaskRunId,omitempty"`
    TransformID *string `json:"TransformId,omitempty"`
    
}

