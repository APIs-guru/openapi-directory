package shared

type GetWorkflowRunsRequest struct {
	IncludeGraph *bool   `json:"IncludeGraph"`
	MaxResults   *int64  `json:"MaxResults"`
	Name         string  `json:"Name"`
	NextToken    *string `json:"NextToken"`
}
