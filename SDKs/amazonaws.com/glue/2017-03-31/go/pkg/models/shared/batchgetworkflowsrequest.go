package shared

type BatchGetWorkflowsRequest struct {
	IncludeGraph *bool    `json:"IncludeGraph"`
	Names        []string `json:"Names"`
}
