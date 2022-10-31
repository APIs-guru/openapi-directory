package shared



type ListNotebookExecutionsOutput struct {
    Marker *string `json:"Marker,omitempty"`
    NotebookExecutions []NotebookExecutionSummary `json:"NotebookExecutions,omitempty"`
    
}

