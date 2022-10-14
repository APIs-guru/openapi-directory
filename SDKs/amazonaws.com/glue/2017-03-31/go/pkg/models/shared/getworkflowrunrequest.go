package shared

type GetWorkflowRunRequest struct {
	IncludeGraph *bool  `json:"IncludeGraph,omitempty"`
	Name         string `json:"Name"`
	RunID        string `json:"RunId"`
}
