package shared

type StartNotebookExecutionInput struct {
	EditorID                        string                `json:"EditorId"`
	ExecutionEngine                 ExecutionEngineConfig `json:"ExecutionEngine"`
	NotebookExecutionName           *string               `json:"NotebookExecutionName"`
	NotebookInstanceSecurityGroupID *string               `json:"NotebookInstanceSecurityGroupId"`
	NotebookParams                  *string               `json:"NotebookParams"`
	RelativePath                    string                `json:"RelativePath"`
	ServiceRole                     string                `json:"ServiceRole"`
	Tags                            []Tag                 `json:"Tags"`
}
