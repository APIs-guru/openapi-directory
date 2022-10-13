package shared

type BatchGetWorkflowsResponse struct {
	MissingWorkflows []string   `json:"MissingWorkflows"`
	Workflows        []Workflow `json:"Workflows"`
}
