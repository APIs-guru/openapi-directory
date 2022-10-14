package shared

type ResumeWorkflowRunResponse struct {
	NodeIds []string `json:"NodeIds,omitempty"`
	RunID   *string  `json:"RunId,omitempty"`
}
