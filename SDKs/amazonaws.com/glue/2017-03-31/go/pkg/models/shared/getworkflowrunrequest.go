package shared

type GetWorkflowRunRequest struct {
	IncludeGraph *bool  `json:"IncludeGraph"`
	Name         string `json:"Name"`
	RunID        string `json:"RunId"`
}
