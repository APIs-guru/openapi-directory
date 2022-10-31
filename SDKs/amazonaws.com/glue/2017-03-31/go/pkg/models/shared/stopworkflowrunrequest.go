package shared

type StopWorkflowRunRequest struct {
	Name  string `json:"Name"`
	RunID string `json:"RunId"`
}
