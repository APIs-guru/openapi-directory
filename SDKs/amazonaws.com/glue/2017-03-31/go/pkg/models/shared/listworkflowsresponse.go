package shared

type ListWorkflowsResponse struct {
	NextToken *string  `json:"NextToken"`
	Workflows []string `json:"Workflows"`
}
