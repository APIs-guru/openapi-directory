package shared

type GetWorkflowRequest struct {
	IncludeGraph *bool  `json:"IncludeGraph"`
	Name         string `json:"Name"`
}
