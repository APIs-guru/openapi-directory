package shared

type ListDetectMitigationActionsTasksResponse struct {
	NextToken *string                              `json:"nextToken,omitempty"`
	Tasks     []DetectMitigationActionsTaskSummary `json:"tasks,omitempty"`
}
