package shared

type GetWorkflowRunsResponse struct {
	NextToken *string       `json:"NextToken,omitempty"`
	Runs      []WorkflowRun `json:"Runs,omitempty"`
}
