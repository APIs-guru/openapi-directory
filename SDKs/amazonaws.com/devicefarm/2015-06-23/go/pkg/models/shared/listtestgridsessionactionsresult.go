package shared

type ListTestGridSessionActionsResult struct {
	Actions   []TestGridSessionAction `json:"actions"`
	NextToken *string                 `json:"nextToken"`
}
