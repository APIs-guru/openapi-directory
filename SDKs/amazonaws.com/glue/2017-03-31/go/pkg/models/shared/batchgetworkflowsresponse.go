package shared

type BatchGetWorkflowsResponse struct {
	MissingWorkflows []string   `json:"MissingWorkflows,omitempty"`
	Workflows        []Workflow `json:"Workflows,omitempty"`
}
