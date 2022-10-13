package shared

type ResumeWorkflowRunResponse struct {
	NodeIds []string `json:"NodeIds"`
	RunID   *string  `json:"RunId"`
}
