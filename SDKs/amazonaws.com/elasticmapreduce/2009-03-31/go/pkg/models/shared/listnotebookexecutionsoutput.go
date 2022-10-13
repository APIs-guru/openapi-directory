package shared

type ListNotebookExecutionsOutput struct {
	Marker             *string                    `json:"Marker"`
	NotebookExecutions []NotebookExecutionSummary `json:"NotebookExecutions"`
}
