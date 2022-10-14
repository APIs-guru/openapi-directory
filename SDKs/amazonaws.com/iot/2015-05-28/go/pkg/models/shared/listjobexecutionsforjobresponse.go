package shared

type ListJobExecutionsForJobResponse struct {
	ExecutionSummaries []JobExecutionSummaryForJob `json:"executionSummaries,omitempty"`
	NextToken          *string                     `json:"nextToken,omitempty"`
}
