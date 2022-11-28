package shared

// ListTaskExecutionsResponse
// ListTaskExecutionsResponse
type ListTaskExecutionsResponse struct {
	NextToken      *string                  `json:"NextToken,omitempty"`
	TaskExecutions []TaskExecutionListEntry `json:"TaskExecutions,omitempty"`
}
