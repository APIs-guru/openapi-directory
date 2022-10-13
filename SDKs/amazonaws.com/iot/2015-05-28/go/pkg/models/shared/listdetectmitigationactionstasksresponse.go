package shared

type ListDetectMitigationActionsTasksResponse struct {
	NextToken *string                              `json:"nextToken"`
	Tasks     []DetectMitigationActionsTaskSummary `json:"tasks"`
}
