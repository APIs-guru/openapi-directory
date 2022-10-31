package shared



type PutWorkflowRunPropertiesRequest struct {
    Name string `json:"Name"`
    RunID string `json:"RunId"`
    RunProperties map[string]string `json:"RunProperties"`
    
}

