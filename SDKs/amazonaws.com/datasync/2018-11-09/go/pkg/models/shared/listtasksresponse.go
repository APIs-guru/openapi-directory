package shared

type ListTasksResponse struct {
	NextToken *string         `json:"NextToken"`
	Tasks     []TaskListEntry `json:"Tasks"`
}
