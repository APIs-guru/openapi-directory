package shared

type ListActionsResponse struct {
	Actions   []ActionSummary `json:"actions"`
	NextToken *string         `json:"nextToken"`
}
