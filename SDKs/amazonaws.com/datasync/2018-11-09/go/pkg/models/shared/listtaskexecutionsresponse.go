package shared

type ListTaskExecutionsResponse struct {
	NextToken      *string                  `json:"NextToken"`
	TaskExecutions []TaskExecutionListEntry `json:"TaskExecutions"`
}
