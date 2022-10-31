package shared



type CancelMlTaskRunRequest struct {
    TaskRunID string `json:"TaskRunId"`
    TransformID string `json:"TransformId"`
    
}

