package shared

type GetWorkflowRunsResponse struct {
	NextToken *string       `json:"NextToken"`
	Runs      []WorkflowRun `json:"Runs"`
}
