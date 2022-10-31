package shared



type SearchQuantumTasksResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    QuantumTasks []QuantumTaskSummary `json:"quantumTasks"`
    
}

