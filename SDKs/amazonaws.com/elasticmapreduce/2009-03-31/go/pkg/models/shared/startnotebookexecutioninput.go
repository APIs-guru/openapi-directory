package shared



type StartNotebookExecutionInput struct {
    EditorID string `json:"EditorId"`
    ExecutionEngine ExecutionEngineConfig `json:"ExecutionEngine"`
    NotebookExecutionName *string `json:"NotebookExecutionName,omitempty"`
    NotebookInstanceSecurityGroupID *string `json:"NotebookInstanceSecurityGroupId,omitempty"`
    NotebookParams *string `json:"NotebookParams,omitempty"`
    RelativePath string `json:"RelativePath"`
    ServiceRole string `json:"ServiceRole"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

