package shared

type ListJobExecutionsForJobResponse struct {
	ExecutionSummaries []JobExecutionSummaryForJob `json:"executionSummaries"`
	NextToken          *string                     `json:"nextToken"`
}
