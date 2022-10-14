package shared

type ListJobExecutionsForThingResponse struct {
	ExecutionSummaries []JobExecutionSummaryForThing `json:"executionSummaries,omitempty"`
	NextToken          *string                       `json:"nextToken,omitempty"`
}
